import { Symptom, Severity } from '../../types/medical';

export const organSystemSymptoms: Symptom[] = [
  // Cardiovascular System
  {
    id: 'heart_rhythm',
    terms: ['irregular heartbeat', 'palpitations', 'racing heart', 'skipped beats', 'arrhythmia'],
    severity: Severity.HIGH,
    requiresEmergency: true,
  },
  {
    id: 'blood_pressure',
    terms: ['high blood pressure', 'low blood pressure', 'hypertension', 'hypotension', 'blood pressure changes'],
    severity: Severity.HIGH,
    requiresEmergency: true,
  },
  
  // Respiratory System
  {
    id: 'breathing_difficulty',
    terms: ['shortness of breath', 'difficulty breathing', 'breathlessness', 'dyspnea', 'cant breathe', 'labored breathing'],
    severity: Severity.HIGH,
    requiresEmergency: true,
  },
  {
    id: 'lung_symptoms',
    terms: ['coughing', 'wheezing', 'chest congestion', 'phlegm', 'sputum', 'bronchial symptoms'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  
  // Digestive System
  {
    id: 'stomach_issues',
    terms: ['stomach pain', 'abdominal pain', 'digestive pain', 'gastric pain', 'belly pain'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  {
    id: 'intestinal_issues',
    terms: ['diarrhea', 'constipation', 'bowel changes', 'intestinal pain', 'bowel movements'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  {
    id: 'liver_symptoms',
    terms: ['liver pain', 'right upper quadrant pain', 'jaundice', 'yellow skin', 'yellow eyes'],
    severity: Severity.HIGH,
    requiresEmergency: true,
  },
  
  // Urinary System
  {
    id: 'kidney_symptoms',
    terms: ['kidney pain', 'flank pain', 'side pain', 'renal colic', 'kidney stone pain'],
    severity: Severity.HIGH,
    requiresEmergency: true,
  },
  {
    id: 'bladder_symptoms',
    terms: ['bladder pain', 'urinary pain', 'painful urination', 'frequent urination', 'urgency'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  
  // Reproductive System
  {
    id: 'reproductive_pain',
    terms: ['pelvic pain', 'genital pain', 'menstrual pain', 'ovulation pain', 'testicular pain'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  
  // Endocrine System
  {
    id: 'thyroid_symptoms',
    terms: ['thyroid problems', 'neck swelling', 'thyroid pain', 'goiter', 'thyroid nodule'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  
  // Immune System
  {
    id: 'immune_symptoms',
    terms: ['swollen lymph nodes', 'lymph node pain', 'immune system problems', 'frequent infections'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
];