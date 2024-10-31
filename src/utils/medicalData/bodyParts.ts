import { Symptom, Severity } from '../../types/medical';

export const bodyPartSymptoms: Symptom[] = [
  // Head and Face
  {
    id: 'head_symptoms',
    terms: ['headache', 'head pain', 'migraine', 'head pressure', 'skull pain', 'head tenderness'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  {
    id: 'face_symptoms',
    terms: ['facial pain', 'face numbness', 'facial swelling', 'face pressure', 'facial paralysis'],
    severity: Severity.HIGH,
    requiresEmergency: true,
  },
  
  // Eyes
  {
    id: 'eye_symptoms',
    terms: ['eye pain', 'vision changes', 'blurred vision', 'double vision', 'eye pressure', 'eye redness'],
    severity: Severity.HIGH,
    requiresEmergency: true,
  },
  
  // Ears
  {
    id: 'ear_symptoms',
    terms: ['ear pain', 'hearing changes', 'ear pressure', 'tinnitus', 'ear ringing', 'ear fullness'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  
  // Nose and Sinuses
  {
    id: 'nose_symptoms',
    terms: ['nasal congestion', 'sinus pain', 'sinus pressure', 'nose pain', 'nasal discharge'],
    severity: Severity.LOW,
    requiresEmergency: false,
  },
  
  // Mouth and Throat
  {
    id: 'mouth_symptoms',
    terms: ['mouth pain', 'oral pain', 'tongue pain', 'gum pain', 'dental pain', 'tooth pain'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  {
    id: 'throat_symptoms',
    terms: ['throat pain', 'sore throat', 'difficulty swallowing', 'throat swelling', 'hoarseness'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  
  // Extremities
  {
    id: 'hand_symptoms',
    terms: ['hand pain', 'finger pain', 'wrist pain', 'hand numbness', 'hand tingling', 'hand weakness'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  {
    id: 'foot_symptoms',
    terms: ['foot pain', 'toe pain', 'ankle pain', 'foot numbness', 'foot tingling', 'foot swelling'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  
  // Skin
  {
    id: 'skin_symptoms',
    terms: ['skin pain', 'skin rash', 'skin burning', 'skin itching', 'skin changes', 'skin lesions'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  
  // Joints
  {
    id: 'joint_symptoms',
    terms: ['joint pain', 'joint swelling', 'joint stiffness', 'joint redness', 'joint warmth'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
];