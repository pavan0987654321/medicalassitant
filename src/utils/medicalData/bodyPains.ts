import { Symptom, Severity } from '../../types/medical';

export const bodyPainSymptoms: Symptom[] = [
  // Musculoskeletal Pain
  {
    id: 'muscle_pain',
    terms: ['muscle pain', 'muscle ache', 'myalgia', 'sore muscles', 'muscle soreness', 'muscle tension'],
    severity: Severity.LOW,
    requiresEmergency: false,
  },
  {
    id: 'joint_pain',
    terms: ['joint pain', 'arthralgia', 'painful joints', 'joint stiffness', 'joint swelling', 'arthritis pain'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  {
    id: 'bone_pain',
    terms: ['bone pain', 'skeletal pain', 'deep bone ache', 'bone tenderness'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  
  // Regional Pain
  {
    id: 'neck_pain',
    terms: ['neck pain', 'cervical pain', 'stiff neck', 'neck stiffness', 'cervicalgia'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  {
    id: 'back_pain_upper',
    terms: ['upper back pain', 'thoracic pain', 'between shoulder blades', 'upper spine pain'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  {
    id: 'back_pain_lower',
    terms: ['lower back pain', 'lumbar pain', 'lumbago', 'sciatica', 'lower spine pain'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  
  // Extremity Pain
  {
    id: 'arm_pain',
    terms: ['arm pain', 'upper limb pain', 'arm ache', 'arm discomfort', 'shoulder pain', 'elbow pain'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  {
    id: 'leg_pain',
    terms: ['leg pain', 'lower limb pain', 'leg ache', 'leg discomfort', 'knee pain', 'ankle pain'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  
  // Nerve Pain
  {
    id: 'nerve_pain',
    terms: ['nerve pain', 'neuralgia', 'burning pain', 'shooting pain', 'tingling pain', 'pins and needles'],
    severity: Severity.MEDIUM,
    requiresEmergency: false,
  },
  
  // Severe Pain Conditions
  {
    id: 'severe_sudden_pain',
    terms: ['severe sudden pain', 'extreme pain', 'worst pain ever', 'unbearable pain', 'excruciating pain'],
    severity: Severity.HIGH,
    requiresEmergency: true,
  },
  {
    id: 'chest_pain_severe',
    terms: ['severe chest pain', 'crushing chest pain', 'heart attack pain', 'cardiac pain', 'angina'],
    severity: Severity.HIGH,
    requiresEmergency: true,
  },
];