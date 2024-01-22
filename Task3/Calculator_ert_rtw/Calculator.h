/*
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * File: Calculator.h
 *
 * Code generated for Simulink model 'Calculator'.
 *
 * Model version                  : 1.1
 * Simulink Coder version         : 9.6 (R2021b) 14-May-2021
 * C/C++ source code generated on : Sun Jan 21 17:11:07 2024
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#ifndef RTW_HEADER_Calculator_h_
#define RTW_HEADER_Calculator_h_
#include <string.h>
#include <stddef.h>
#ifndef Calculator_COMMON_INCLUDES_
#define Calculator_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* Calculator_COMMON_INCLUDES_ */

#include "Calculator_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
#define rtmGetErrorStatus(rtm)         ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
#define rtmSetErrorStatus(rtm, val)    ((rtm)->errorStatus = (val))
#endif

/* External inputs (root inport signals with default storage) */
typedef struct {
  real_T Input;                        /* '<Root>/Input' */
  real_T Input1;                       /* '<Root>/Input1' */
  int8_T Input2;                       /* '<Root>/Input2' */
} ExtU_Calculator_T;

/* External outputs (root outports fed by signals with default storage) */
typedef struct {
  real_T Output;                       /* '<Root>/Output' */
  real_T Output1;                      /* '<Root>/Output1' */
  real_T Output2;                      /* '<Root>/Output2' */
  real_T Output3;                      /* '<Root>/Output3' */
  boolean_T Output4;                   /* '<Root>/Output4' */
  int8_T Output5;                      /* '<Root>/Output5' */
} ExtY_Calculator_T;

/* Real-time Model Data Structure */
struct tag_RTM_Calculator_T {
  const char_T * volatile errorStatus;
};

/* External inputs (root inport signals with default storage) */
extern ExtU_Calculator_T Calculator_U;

/* External outputs (root outports fed by signals with default storage) */
extern ExtY_Calculator_T Calculator_Y;

/* Model entry point functions */
extern void Calculator_initialize(void);
extern void Calculator_step(void);
extern void Calculator_terminate(void);

/* Real-time Model object */
extern RT_MODEL_Calculator_T *const Calculator_M;

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'Calculator'
 * '<S1>'   : 'Calculator/Bit Clear'
 */
#endif                                 /* RTW_HEADER_Calculator_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
