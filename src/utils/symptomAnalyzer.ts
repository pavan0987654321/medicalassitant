import { symptoms, conditions } from './medicalKnowledge';
import { AnalysisResult, Severity, Symptom, Condition } from '../types/medical';

export class SymptomAnalyzer {
  private static normalizeText(text: string): string {
    return text.toLowerCase().trim();
  }

  private static findSymptomMatches(text: string, terms: string[]): boolean {
    const normalizedInput = this.normalizeText(text);
    const words = normalizedInput.split(/\s+/);
    
    return terms.some(term => {
      const normalizedTerm = this.normalizeText(term);
      
      // Direct match
      if (normalizedInput.includes(normalizedTerm)) {
        return true;
      }
      
      // Word boundary match
      const termWords = normalizedTerm.split(/\s+/);
      return termWords.every(word => 
        words.some(inputWord => 
          inputWord.includes(word) || word.includes(inputWord)
        )
      );
    });
  }

  private static findSymptoms(text: string): Symptom[] {
    const detectedSymptoms = new Set<Symptom>();

    symptoms.forEach(symptom => {
      if (this.findSymptomMatches(text, symptom.terms)) {
        detectedSymptoms.add(symptom);
      }
    });

    return Array.from(detectedSymptoms);
  }

  private static findConditions(detectedSymptoms: Symptom[]): Condition[] {
    const symptomIds = new Set(detectedSymptoms.map(s => s.id));
    const matchedConditions = new Set<Condition>();

    conditions.forEach(condition => {
      const matchingSymptoms = condition.symptoms.filter(symptomId => 
        symptomIds.has(symptomId)
      );

      if (matchingSymptoms.length > 0) {
        matchedConditions.add({
          ...condition,
          matchScore: matchingSymptoms.length / condition.symptoms.length
        });
      }
    });

    // Sort by match score and severity
    return Array.from(matchedConditions)
      .sort((a, b) => {
        const severityOrder = { [Severity.HIGH]: 3, [Severity.MEDIUM]: 2, [Severity.LOW]: 1 };
        const severityDiff = severityOrder[b.severity] - severityOrder[a.severity];
        
        if (severityDiff !== 0) return severityDiff;
        return (b.matchScore || 0) - (a.matchScore || 0);
      });
  }

  private static calculateSeverity(
    detectedSymptoms: Symptom[],
    matchedConditions: Condition[]
  ): Severity {
    // Check for any high severity symptoms or conditions
    if (
      detectedSymptoms.some(s => s.severity === Severity.HIGH) ||
      matchedConditions.some(c => c.severity === Severity.HIGH)
    ) {
      return Severity.HIGH;
    }

    // Check for medium severity
    if (
      detectedSymptoms.some(s => s.severity === Severity.MEDIUM) ||
      matchedConditions.some(c => c.severity === Severity.MEDIUM)
    ) {
      return Severity.MEDIUM;
    }

    // Default to low severity
    return Severity.LOW;
  }

  private static requiresEmergencyResponse(
    detectedSymptoms: Symptom[],
    matchedConditions: Condition[]
  ): boolean {
    return (
      detectedSymptoms.some(s => s.requiresEmergency) ||
      matchedConditions.some(c => c.severity === Severity.HIGH)
    );
  }

  static analyzeSymptoms(text: string): AnalysisResult {
    const detectedSymptoms = this.findSymptoms(text);
    const matchedConditions = this.findConditions(detectedSymptoms);
    
    return {
      conditions: matchedConditions,
      severity: this.calculateSeverity(detectedSymptoms, matchedConditions),
      requiresEmergency: this.requiresEmergencyResponse(detectedSymptoms, matchedConditions),
    };
  }
}