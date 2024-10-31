import { Symptom, Condition, Severity } from '../types/medical';
import { bodyPainSymptoms } from './medicalData/bodyPains';
import { organSystemSymptoms } from './medicalData/organSystems';
import { bodyPartSymptoms } from './medicalData/bodyParts';

// Combine all symptoms
export const symptoms: Symptom[] = [
  ...bodyPainSymptoms,
  ...organSystemSymptoms,
  ...bodyPartSymptoms,
];

export const conditions: Condition[] = [
  // Musculoskeletal Conditions
  {
    id: 'fibromyalgia',
    name: 'Possible Fibromyalgia',
    symptoms: ['muscle_pain', 'joint_pain', 'fatigue'],
    advice: 'Chronic widespread pain condition:\n- Rest and gentle exercise\n- Stress management\n- Sleep hygiene\n- Consider pain management specialist\n- Discuss treatment options with healthcare provider',
    severity: Severity.MEDIUM,
  },
  {
    id: 'arthritis',
    name: 'Possible Arthritis',
    symptoms: ['joint_pain', 'joint_symptoms', 'morning_stiffness'],
    advice: 'Joint inflammation condition:\n- Rest affected joints\n- Apply ice/heat\n- Over-the-counter anti-inflammatory medication if appropriate\n- Gentle range of motion exercises\n- Consult rheumatologist for proper diagnosis and treatment',
    severity: Severity.MEDIUM,
  },
  
  // Cardiovascular Conditions
  {
    id: 'heart_attack',
    name: 'Possible Heart Attack',
    symptoms: ['chest_pain_severe', 'heart_rhythm', 'breathing_difficulty'],
    advice: 'EMERGENCY - CALL 911 IMMEDIATELY!\n- Chew aspirin if available and not allergic\n- Rest in comfortable position\n- Loosen tight clothing\n- Note time symptoms started',
    severity: Severity.HIGH,
  },
  
  // Respiratory Conditions
  {
    id: 'pulmonary_embolism',
    name: 'Possible Pulmonary Embolism',
    symptoms: ['breathing_difficulty', 'chest_pain_severe', 'heart_rhythm'],
    advice: 'EMERGENCY - CALL 911 IMMEDIATELY!\n- Sit upright\n- Stay calm\n- Note when symptoms started\n- Avoid physical exertion',
    severity: Severity.HIGH,
  },
  
  // Gastrointestinal Conditions
  {
    id: 'appendicitis',
    name: 'Possible Appendicitis',
    symptoms: ['stomach_issues', 'severe_sudden_pain'],
    advice: 'SEEK IMMEDIATE MEDICAL CARE!\n- Do not eat or drink\n- Do not take pain medications\n- Do not use heating pad\n- Note time symptoms started',
    severity: Severity.HIGH,
  },
  
  // Neurological Conditions
  {
    id: 'stroke',
    name: 'Possible Stroke',
    symptoms: ['face_symptoms', 'arm_pain', 'speech_difficulty'],
    advice: 'EMERGENCY - CALL 911 IMMEDIATELY!\nRemember FAST:\nF - Face drooping\nA - Arm weakness\nS - Speech difficulty\nT - Time to call emergency',
    severity: Severity.HIGH,
  },
  
  // Kidney Conditions
  {
    id: 'kidney_stones',
    name: 'Possible Kidney Stones',
    symptoms: ['kidney_symptoms', 'severe_sudden_pain', 'bladder_symptoms'],
    advice: 'Severe kidney pain condition:\n- Seek immediate medical attention\n- Stay hydrated if able\n- Note pain patterns\n- Do not take pain medication before evaluation',
    severity: Severity.HIGH,
  },
  
  // Liver Conditions
  {
    id: 'hepatitis',
    name: 'Possible Hepatitis',
    symptoms: ['liver_symptoms', 'fatigue', 'stomach_issues'],
    advice: 'Liver inflammation condition:\n- Seek immediate medical evaluation\n- Rest\n- Avoid alcohol\n- Stay hydrated\n- Follow strict hygiene practices',
    severity: Severity.HIGH,
  },
];

// Add more specific conditions based on the expanded symptom set...