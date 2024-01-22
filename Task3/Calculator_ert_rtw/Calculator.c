/*
 * Academic License - for use in teaching, academic research, and meeting
 * course requirements at degree granting institutions only.  Not for
 * government, commercial, or other organizational use.
 *
 * File: Calculator.c
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

#include "Calculator.h"
#include "Calculator_private.h"

/* External inputs (root inport signals with default storage) */
ExtU_Calculator_T Calculator_U;

/* External outputs (root outports fed by signals with default storage) */
ExtY_Calculator_T Calculator_Y;

/* Real-time model */
static RT_MODEL_Calculator_T Calculator_M_;
RT_MODEL_Calculator_T *const Calculator_M = &Calculator_M_;

/* Model step function */
void Calculator_step(void)
{
  /* Outport: '<Root>/Output' incorporates:
   *  Inport: '<Root>/Input'
   *  Inport: '<Root>/Input1'
   *  Sum: '<Root>/Add'
   */
  Calculator_Y.Output = Calculator_U.Input + Calculator_U.Input1;

  /* Outport: '<Root>/Output1' incorporates:
   *  Inport: '<Root>/Input'
   *  Inport: '<Root>/Input1'
   *  Sum: '<Root>/Subtract'
   */
  Calculator_Y.Output1 = Calculator_U.Input - Calculator_U.Input1;

  /* Outport: '<Root>/Output2' incorporates:
   *  Inport: '<Root>/Input'
   *  Inport: '<Root>/Input1'
   *  Product: '<Root>/Product'
   */
  Calculator_Y.Output2 = Calculator_U.Input * Calculator_U.Input1;

  /* Outport: '<Root>/Output3' incorporates:
   *  Inport: '<Root>/Input'
   *  Inport: '<Root>/Input1'
   *  Product: '<Root>/Divide'
   */
  Calculator_Y.Output3 = Calculator_U.Input / Calculator_U.Input1;

  /* Outport: '<Root>/Output4' incorporates:
   *  Constant: '<Root>/Constant2'
   *  Inport: '<Root>/Input1'
   *  RelationalOperator: '<Root>/Equal'
   */
  Calculator_Y.Output4 = (Calculator_U.Input1 == 0.0);

  /* Outport: '<Root>/Output5' incorporates:
   *  Inport: '<Root>/Input2'
   *  S-Function (sfix_bitop): '<S1>/FixPt Bitwise Operator3'
   *  S-Function (sfix_bitop): '<S1>/FixPt Bitwise Operator4'
   *  S-Function (sfix_bitop): '<S1>/FixPt Bitwise Operator5'
   */
  Calculator_Y.Output5 = (int8_T)~(int8_T)((int8_T)~Calculator_U.Input2 | 1);
}

/* Model initialize function */
void Calculator_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(Calculator_M, (NULL));

  /* external inputs */
  (void)memset(&Calculator_U, 0, sizeof(ExtU_Calculator_T));

  /* external outputs */
  (void)memset(&Calculator_Y, 0, sizeof(ExtY_Calculator_T));
}

/* Model terminate function */
void Calculator_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
