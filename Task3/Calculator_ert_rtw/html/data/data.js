var dataJson = {"arch":{"ispc":true,"isunix":false,"ismac":false},"build":"Calculator","ref":false,"files":[{"name":"ert_main.c","type":"source","group":"main","path":"E:\\ES_ITI\\matlab\\lec4\\Tasks\\Calculator_ert_rtw","tag":"","groupDisplay":"Main file","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: ert_main.c\r\n *\r\n * Code generated for Simulink model 'Calculator'.\r\n *\r\n * Model version                  : 1.1\r\n * Simulink Coder version         : 9.6 (R2021b) 14-May-2021\r\n * C/C++ source code generated on : Sun Jan 21 17:11:07 2024\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives: Unspecified\r\n * Validation result: Not run\r\n */\r\n\r\n#include <stddef.h>\r\n#include <stdio.h>            /* This example main program uses printf/fflush */\r\n#include \"Calculator.h\"                /* Model's header file */\r\n\r\n/*\r\n * Associating rt_OneStep with a real-time clock or interrupt service routine\r\n * is what makes the generated code \"real-time\".  The function rt_OneStep is\r\n * always associated with the base rate of the model.  Subrates are managed\r\n * by the base rate from inside the generated code.  Enabling/disabling\r\n * interrupts and floating point context switches are target specific.  This\r\n * example code indicates where these should take place relative to executing\r\n * the generated code step function.  Overrun behavior should be tailored to\r\n * your application needs.  This example simply sets an error status in the\r\n * real-time model and returns from rt_OneStep.\r\n */\r\nvoid rt_OneStep(void);\r\nvoid rt_OneStep(void)\r\n{\r\n  static boolean_T OverrunFlag = false;\r\n\r\n  /* Disable interrupts here */\r\n\r\n  /* Check for overrun */\r\n  if (OverrunFlag) {\r\n    rtmSetErrorStatus(Calculator_M, \"Overrun\");\r\n    return;\r\n  }\r\n\r\n  OverrunFlag = true;\r\n\r\n  /* Save FPU context here (if necessary) */\r\n  /* Re-enable timer or interrupt here */\r\n  /* Set model inputs here */\r\n\r\n  /* Step the model */\r\n  Calculator_step();\r\n\r\n  /* Get model outputs here */\r\n\r\n  /* Indicate task complete */\r\n  OverrunFlag = false;\r\n\r\n  /* Disable interrupts here */\r\n  /* Restore FPU context here (if necessary) */\r\n  /* Enable interrupts here */\r\n}\r\n\r\n/*\r\n * The example \"main\" function illustrates what is required by your\r\n * application code to initialize, execute, and terminate the generated code.\r\n * Attaching rt_OneStep to a real-time clock is target specific.  This example\r\n * illustrates how you do this relative to initializing the model.\r\n */\r\nint_T main(int_T argc, const char *argv[])\r\n{\r\n  /* Unused arguments */\r\n  (void)(argc);\r\n  (void)(argv);\r\n\r\n  /* Initialize model */\r\n  Calculator_initialize();\r\n\r\n  /* Attach rt_OneStep to a timer or interrupt service routine with\r\n   * period 0.2 seconds (the model's base sample time) here.  The\r\n   * call syntax for rt_OneStep is\r\n   *\r\n   *  rt_OneStep();\r\n   */\r\n  printf(\"Warning: The simulation will run forever. \"\r\n         \"Generated ERT main won't simulate model step behavior. \"\r\n         \"To change this behavior select the 'MAT-file logging' option.\\n\");\r\n  fflush((NULL));\r\n  while (rtmGetErrorStatus(Calculator_M) == (NULL)) {\r\n    /*  Perform application tasks here */\r\n  }\r\n\r\n  /* Disable rt_OneStep here */\r\n  /* Terminate model */\r\n  Calculator_terminate();\r\n  return 0;\r\n}\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"},{"name":"Calculator.c","type":"source","group":"model","path":"E:\\ES_ITI\\matlab\\lec4\\Tasks\\Calculator_ert_rtw","tag":"","groupDisplay":"Model files","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: Calculator.c\r\n *\r\n * Code generated for Simulink model 'Calculator'.\r\n *\r\n * Model version                  : 1.1\r\n * Simulink Coder version         : 9.6 (R2021b) 14-May-2021\r\n * C/C++ source code generated on : Sun Jan 21 17:11:07 2024\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives: Unspecified\r\n * Validation result: Not run\r\n */\r\n\r\n#include \"Calculator.h\"\r\n#include \"Calculator_private.h\"\r\n\r\n/* External inputs (root inport signals with default storage) */\r\nExtU_Calculator_T Calculator_U;\r\n\r\n/* External outputs (root outports fed by signals with default storage) */\r\nExtY_Calculator_T Calculator_Y;\r\n\r\n/* Real-time model */\r\nstatic RT_MODEL_Calculator_T Calculator_M_;\r\nRT_MODEL_Calculator_T *const Calculator_M = &Calculator_M_;\r\n\r\n/* Model step function */\r\nvoid Calculator_step(void)\r\n{\r\n  /* Outport: '<Root>/Output' incorporates:\r\n   *  Inport: '<Root>/Input'\r\n   *  Inport: '<Root>/Input1'\r\n   *  Sum: '<Root>/Add'\r\n   */\r\n  Calculator_Y.Output = Calculator_U.Input + Calculator_U.Input1;\r\n\r\n  /* Outport: '<Root>/Output1' incorporates:\r\n   *  Inport: '<Root>/Input'\r\n   *  Inport: '<Root>/Input1'\r\n   *  Sum: '<Root>/Subtract'\r\n   */\r\n  Calculator_Y.Output1 = Calculator_U.Input - Calculator_U.Input1;\r\n\r\n  /* Outport: '<Root>/Output2' incorporates:\r\n   *  Inport: '<Root>/Input'\r\n   *  Inport: '<Root>/Input1'\r\n   *  Product: '<Root>/Product'\r\n   */\r\n  Calculator_Y.Output2 = Calculator_U.Input * Calculator_U.Input1;\r\n\r\n  /* Outport: '<Root>/Output3' incorporates:\r\n   *  Inport: '<Root>/Input'\r\n   *  Inport: '<Root>/Input1'\r\n   *  Product: '<Root>/Divide'\r\n   */\r\n  Calculator_Y.Output3 = Calculator_U.Input / Calculator_U.Input1;\r\n\r\n  /* Outport: '<Root>/Output4' incorporates:\r\n   *  Constant: '<Root>/Constant2'\r\n   *  Inport: '<Root>/Input1'\r\n   *  RelationalOperator: '<Root>/Equal'\r\n   */\r\n  Calculator_Y.Output4 = (Calculator_U.Input1 == 0.0);\r\n\r\n  /* Outport: '<Root>/Output5' incorporates:\r\n   *  Inport: '<Root>/Input2'\r\n   *  S-Function (sfix_bitop): '<S1>/FixPt Bitwise Operator3'\r\n   *  S-Function (sfix_bitop): '<S1>/FixPt Bitwise Operator4'\r\n   *  S-Function (sfix_bitop): '<S1>/FixPt Bitwise Operator5'\r\n   */\r\n  Calculator_Y.Output5 = (int8_T)~(int8_T)((int8_T)~Calculator_U.Input2 | 1);\r\n}\r\n\r\n/* Model initialize function */\r\nvoid Calculator_initialize(void)\r\n{\r\n  /* Registration code */\r\n\r\n  /* initialize error status */\r\n  rtmSetErrorStatus(Calculator_M, (NULL));\r\n\r\n  /* external inputs */\r\n  (void)memset(&Calculator_U, 0, sizeof(ExtU_Calculator_T));\r\n\r\n  /* external outputs */\r\n  (void)memset(&Calculator_Y, 0, sizeof(ExtY_Calculator_T));\r\n}\r\n\r\n/* Model terminate function */\r\nvoid Calculator_terminate(void)\r\n{\r\n  /* (no terminate code required) */\r\n}\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"},{"name":"Calculator.h","type":"header","group":"model","path":"E:\\ES_ITI\\matlab\\lec4\\Tasks\\Calculator_ert_rtw","tag":"","groupDisplay":"Model files","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: Calculator.h\r\n *\r\n * Code generated for Simulink model 'Calculator'.\r\n *\r\n * Model version                  : 1.1\r\n * Simulink Coder version         : 9.6 (R2021b) 14-May-2021\r\n * C/C++ source code generated on : Sun Jan 21 17:11:07 2024\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives: Unspecified\r\n * Validation result: Not run\r\n */\r\n\r\n#ifndef RTW_HEADER_Calculator_h_\r\n#define RTW_HEADER_Calculator_h_\r\n#include <string.h>\r\n#include <stddef.h>\r\n#ifndef Calculator_COMMON_INCLUDES_\r\n#define Calculator_COMMON_INCLUDES_\r\n#include \"rtwtypes.h\"\r\n#endif                                 /* Calculator_COMMON_INCLUDES_ */\r\n\r\n#include \"Calculator_types.h\"\r\n\r\n/* Macros for accessing real-time model data structure */\r\n#ifndef rtmGetErrorStatus\r\n#define rtmGetErrorStatus(rtm)         ((rtm)->errorStatus)\r\n#endif\r\n\r\n#ifndef rtmSetErrorStatus\r\n#define rtmSetErrorStatus(rtm, val)    ((rtm)->errorStatus = (val))\r\n#endif\r\n\r\n/* External inputs (root inport signals with default storage) */\r\ntypedef struct {\r\n  real_T Input;                        /* '<Root>/Input' */\r\n  real_T Input1;                       /* '<Root>/Input1' */\r\n  int8_T Input2;                       /* '<Root>/Input2' */\r\n} ExtU_Calculator_T;\r\n\r\n/* External outputs (root outports fed by signals with default storage) */\r\ntypedef struct {\r\n  real_T Output;                       /* '<Root>/Output' */\r\n  real_T Output1;                      /* '<Root>/Output1' */\r\n  real_T Output2;                      /* '<Root>/Output2' */\r\n  real_T Output3;                      /* '<Root>/Output3' */\r\n  boolean_T Output4;                   /* '<Root>/Output4' */\r\n  int8_T Output5;                      /* '<Root>/Output5' */\r\n} ExtY_Calculator_T;\r\n\r\n/* Real-time Model Data Structure */\r\nstruct tag_RTM_Calculator_T {\r\n  const char_T * volatile errorStatus;\r\n};\r\n\r\n/* External inputs (root inport signals with default storage) */\r\nextern ExtU_Calculator_T Calculator_U;\r\n\r\n/* External outputs (root outports fed by signals with default storage) */\r\nextern ExtY_Calculator_T Calculator_Y;\r\n\r\n/* Model entry point functions */\r\nextern void Calculator_initialize(void);\r\nextern void Calculator_step(void);\r\nextern void Calculator_terminate(void);\r\n\r\n/* Real-time Model object */\r\nextern RT_MODEL_Calculator_T *const Calculator_M;\r\n\r\n/*-\r\n * The generated code includes comments that allow you to trace directly\r\n * back to the appropriate location in the model.  The basic format\r\n * is <system>/block_name, where system is the system number (uniquely\r\n * assigned by Simulink) and block_name is the name of the block.\r\n *\r\n * Use the MATLAB hilite_system command to trace the generated code back\r\n * to the model.  For example,\r\n *\r\n * hilite_system('<S3>')    - opens system 3\r\n * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3\r\n *\r\n * Here is the system hierarchy for this model\r\n *\r\n * '<Root>' : 'Calculator'\r\n * '<S1>'   : 'Calculator/Bit Clear'\r\n */\r\n#endif                                 /* RTW_HEADER_Calculator_h_ */\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"},{"name":"Calculator_private.h","type":"header","group":"model","path":"E:\\ES_ITI\\matlab\\lec4\\Tasks\\Calculator_ert_rtw","tag":"","groupDisplay":"Model files","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: Calculator_private.h\r\n *\r\n * Code generated for Simulink model 'Calculator'.\r\n *\r\n * Model version                  : 1.1\r\n * Simulink Coder version         : 9.6 (R2021b) 14-May-2021\r\n * C/C++ source code generated on : Sun Jan 21 17:11:07 2024\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives: Unspecified\r\n * Validation result: Not run\r\n */\r\n\r\n#ifndef RTW_HEADER_Calculator_private_h_\r\n#define RTW_HEADER_Calculator_private_h_\r\n#include \"rtwtypes.h\"\r\n#endif                                 /* RTW_HEADER_Calculator_private_h_ */\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"},{"name":"Calculator_types.h","type":"header","group":"model","path":"E:\\ES_ITI\\matlab\\lec4\\Tasks\\Calculator_ert_rtw","tag":"","groupDisplay":"Model files","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: Calculator_types.h\r\n *\r\n * Code generated for Simulink model 'Calculator'.\r\n *\r\n * Model version                  : 1.1\r\n * Simulink Coder version         : 9.6 (R2021b) 14-May-2021\r\n * C/C++ source code generated on : Sun Jan 21 17:11:07 2024\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives: Unspecified\r\n * Validation result: Not run\r\n */\r\n\r\n#ifndef RTW_HEADER_Calculator_types_h_\r\n#define RTW_HEADER_Calculator_types_h_\r\n\r\n/* Model Code Variants */\r\n\r\n/* Forward declaration for rtModel */\r\ntypedef struct tag_RTM_Calculator_T RT_MODEL_Calculator_T;\r\n\r\n#endif                                 /* RTW_HEADER_Calculator_types_h_ */\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"},{"name":"rtwtypes.h","type":"header","group":"utility","path":"E:\\ES_ITI\\matlab\\lec4\\Tasks\\Calculator_ert_rtw","tag":"","groupDisplay":"Utility files","code":"/*\r\n * Academic License - for use in teaching, academic research, and meeting\r\n * course requirements at degree granting institutions only.  Not for\r\n * government, commercial, or other organizational use.\r\n *\r\n * File: rtwtypes.h\r\n *\r\n * Code generated for Simulink model 'Calculator'.\r\n *\r\n * Model version                  : 1.1\r\n * Simulink Coder version         : 9.6 (R2021b) 14-May-2021\r\n * C/C++ source code generated on : Sun Jan 21 17:11:07 2024\r\n *\r\n * Target selection: ert.tlc\r\n * Embedded hardware selection: Intel->x86-64 (Windows64)\r\n * Code generation objectives: Unspecified\r\n * Validation result: Not run\r\n */\r\n\r\n#ifndef RTWTYPES_H\r\n#define RTWTYPES_H\r\n\r\n/* Logical type definitions */\r\n#if (!defined(__cplusplus))\r\n#ifndef false\r\n#define false                          (0U)\r\n#endif\r\n\r\n#ifndef true\r\n#define true                           (1U)\r\n#endif\r\n#endif\r\n\r\n/*=======================================================================*\r\n * Target hardware information\r\n *   Device type: Intel->x86-64 (Windows64)\r\n *   Number of bits:     char:   8    short:   16    int:  32\r\n *                       long:  32\r\n *                       native word size:  64\r\n *   Byte ordering: LittleEndian\r\n *   Signed integer division rounds to: Zero\r\n *   Shift right on a signed integer as arithmetic shift: on\r\n *=======================================================================*/\r\n\r\n/*=======================================================================*\r\n * Fixed width word size data types:                                     *\r\n *   int8_T, int16_T, int32_T     - signed 8, 16, or 32 bit integers     *\r\n *   uint8_T, uint16_T, uint32_T  - unsigned 8, 16, or 32 bit integers   *\r\n *   real32_T, real64_T           - 32 and 64 bit floating point numbers *\r\n *=======================================================================*/\r\ntypedef signed char int8_T;\r\ntypedef unsigned char uint8_T;\r\ntypedef short int16_T;\r\ntypedef unsigned short uint16_T;\r\ntypedef int int32_T;\r\ntypedef unsigned int uint32_T;\r\ntypedef float real32_T;\r\ntypedef double real64_T;\r\n\r\n/*===========================================================================*\r\n * Generic type definitions: boolean_T, char_T, byte_T, int_T, uint_T,       *\r\n *                           real_T, time_T, ulong_T.                        *\r\n *===========================================================================*/\r\ntypedef double real_T;\r\ntypedef double time_T;\r\ntypedef unsigned char boolean_T;\r\ntypedef int int_T;\r\ntypedef unsigned int uint_T;\r\ntypedef unsigned long ulong_T;\r\ntypedef char char_T;\r\ntypedef unsigned char uchar_T;\r\ntypedef char_T byte_T;\r\n\r\n/*===========================================================================*\r\n * Complex number type definitions                                           *\r\n *===========================================================================*/\r\n#define CREAL_T\r\n\r\ntypedef struct {\r\n  real32_T re;\r\n  real32_T im;\r\n} creal32_T;\r\n\r\ntypedef struct {\r\n  real64_T re;\r\n  real64_T im;\r\n} creal64_T;\r\n\r\ntypedef struct {\r\n  real_T re;\r\n  real_T im;\r\n} creal_T;\r\n\r\n#define CINT8_T\r\n\r\ntypedef struct {\r\n  int8_T re;\r\n  int8_T im;\r\n} cint8_T;\r\n\r\n#define CUINT8_T\r\n\r\ntypedef struct {\r\n  uint8_T re;\r\n  uint8_T im;\r\n} cuint8_T;\r\n\r\n#define CINT16_T\r\n\r\ntypedef struct {\r\n  int16_T re;\r\n  int16_T im;\r\n} cint16_T;\r\n\r\n#define CUINT16_T\r\n\r\ntypedef struct {\r\n  uint16_T re;\r\n  uint16_T im;\r\n} cuint16_T;\r\n\r\n#define CINT32_T\r\n\r\ntypedef struct {\r\n  int32_T re;\r\n  int32_T im;\r\n} cint32_T;\r\n\r\n#define CUINT32_T\r\n\r\ntypedef struct {\r\n  uint32_T re;\r\n  uint32_T im;\r\n} cuint32_T;\r\n\r\n/*=======================================================================*\r\n * Min and Max:                                                          *\r\n *   int8_T, int16_T, int32_T     - signed 8, 16, or 32 bit integers     *\r\n *   uint8_T, uint16_T, uint32_T  - unsigned 8, 16, or 32 bit integers   *\r\n *=======================================================================*/\r\n#define MAX_int8_T                     ((int8_T)(127))\r\n#define MIN_int8_T                     ((int8_T)(-128))\r\n#define MAX_uint8_T                    ((uint8_T)(255U))\r\n#define MAX_int16_T                    ((int16_T)(32767))\r\n#define MIN_int16_T                    ((int16_T)(-32768))\r\n#define MAX_uint16_T                   ((uint16_T)(65535U))\r\n#define MAX_int32_T                    ((int32_T)(2147483647))\r\n#define MIN_int32_T                    ((int32_T)(-2147483647-1))\r\n#define MAX_uint32_T                   ((uint32_T)(0xFFFFFFFFU))\r\n\r\n/* Block D-Work pointer type */\r\ntypedef void * pointer_T;\r\n\r\n#endif                                 /* RTWTYPES_H */\r\n\r\n/*\r\n * File trailer for generated code.\r\n *\r\n * [EOF]\r\n */\r\n"}],"trace":"{\"model\":\"Calculator\",\"sources\":[\"Calculator.c\",\"Calculator.h\"],\"categoricalProps\":[\"ModelElemCategory\",\"StorageClass\"],\"categoricalValues\":[\"Inports\",\"Default\",\"Outports\"],\"sidPrefixes\":[\"Calculator\"],\"fileRecords\":{\"1\":{\"records\":[{\"tk\":[42,3,42,9],\"els\":[\"1:18\"],\"ct\":{\"1\":1,\"0\":0}},{\"tk\":[42,10,42,15],\"els\":[\"1:18\"],\"ct\":{\"1\":1,\"0\":0}},{\"tk\":[42,15,42,16],\"els\":[\"1:18\"],\"ct\":{\"1\":1,\"0\":0}},{\"tk\":[43,3,43,9],\"els\":[\"1:19\"],\"ct\":{\"1\":1,\"0\":0}},{\"tk\":[43,10,43,16],\"els\":[\"1:19\"],\"ct\":{\"1\":1,\"0\":0}},{\"tk\":[43,16,43,17],\"els\":[\"1:19\"],\"ct\":{\"1\":1,\"0\":0}},{\"tk\":[44,3,44,9],\"els\":[\"1:26\"],\"ct\":{\"1\":1,\"0\":0}},{\"tk\":[44,10,44,16],\"els\":[\"1:26\"],\"ct\":{\"1\":1,\"0\":0}},{\"tk\":[44,16,44,17],\"els\":[\"1:26\"],\"ct\":{\"1\":1,\"0\":0}},{\"tk\":[49,3,49,9],\"els\":[\"1:20\"],\"ct\":{\"1\":1,\"0\":2}},{\"tk\":[49,10,49,16],\"els\":[\"1:20\"],\"ct\":{\"1\":1,\"0\":2}},{\"tk\":[49,16,49,17],\"els\":[\"1:20\"],\"ct\":{\"1\":1,\"0\":2}},{\"tk\":[50,3,50,9],\"els\":[\"1:21\"],\"ct\":{\"1\":1,\"0\":2}},{\"tk\":[50,10,50,17],\"els\":[\"1:21\"],\"ct\":{\"1\":1,\"0\":2}},{\"tk\":[50,17,50,18],\"els\":[\"1:21\"],\"ct\":{\"1\":1,\"0\":2}},{\"tk\":[51,3,51,9],\"els\":[\"1:22\"],\"ct\":{\"1\":1,\"0\":2}},{\"tk\":[51,10,51,17],\"els\":[\"1:22\"],\"ct\":{\"1\":1,\"0\":2}},{\"tk\":[51,17,51,18],\"els\":[\"1:22\"],\"ct\":{\"1\":1,\"0\":2}},{\"tk\":[52,3,52,9],\"els\":[\"1:23\"],\"ct\":{\"1\":1,\"0\":2}},{\"tk\":[52,10,52,17],\"els\":[\"1:23\"],\"ct\":{\"1\":1,\"0\":2}},{\"tk\":[52,17,52,18],\"els\":[\"1:23\"],\"ct\":{\"1\":1,\"0\":2}},{\"tk\":[53,3,53,12],\"els\":[\"1:24\"],\"ct\":{\"1\":1,\"0\":2}},{\"tk\":[53,13,53,20],\"els\":[\"1:24\"],\"ct\":{\"1\":1,\"0\":2}},{\"tk\":[53,20,53,21],\"els\":[\"1:24\"],\"ct\":{\"1\":1,\"0\":2}},{\"tk\":[54,3,54,9],\"els\":[\"1:27\"],\"ct\":{\"1\":1,\"0\":2}},{\"tk\":[54,10,54,17],\"els\":[\"1:27\"],\"ct\":{\"1\":1,\"0\":2}},{\"tk\":[54,17,54,18],\"els\":[\"1:27\"],\"ct\":{\"1\":1,\"0\":2}}]},\"0\":{\"records\":[{\"tk\":[41,3,41,15],\"els\":[\"0:20\"]},{\"tk\":[41,16,41,22],\"els\":[\"0:20\"]},{\"tk\":[41,23,41,24],\"els\":[\"0:20\"]},{\"tk\":[41,25,41,37],\"els\":[\"0:18\"]},{\"tk\":[41,38,41,43],\"els\":[\"0:18\"]},{\"tk\":[41,44,41,45],\"els\":[\"0:1\"]},{\"tk\":[41,46,41,58],\"els\":[\"0:19\"]},{\"tk\":[41,59,41,65],\"els\":[\"0:19\"]},{\"tk\":[48,3,48,15],\"els\":[\"0:21\"]},{\"tk\":[48,16,48,23],\"els\":[\"0:21\"]},{\"tk\":[48,24,48,25],\"els\":[\"0:21\"]},{\"tk\":[48,26,48,38],\"els\":[\"0:18\"]},{\"tk\":[48,39,48,44],\"els\":[\"0:18\"]},{\"tk\":[48,45,48,46],\"els\":[\"0:2\"]},{\"tk\":[48,47,48,59],\"els\":[\"0:19\"]},{\"tk\":[48,60,48,66],\"els\":[\"0:19\"]},{\"tk\":[55,3,55,15],\"els\":[\"0:22\"]},{\"tk\":[55,16,55,23],\"els\":[\"0:22\"]},{\"tk\":[55,24,55,25],\"els\":[\"0:22\"]},{\"tk\":[55,26,55,38],\"els\":[\"0:18\"]},{\"tk\":[55,39,55,44],\"els\":[\"0:18\"]},{\"tk\":[55,45,55,46],\"els\":[\"0:5\"]},{\"tk\":[55,47,55,59],\"els\":[\"0:19\"]},{\"tk\":[55,60,55,66],\"els\":[\"0:19\"]},{\"tk\":[62,3,62,15],\"els\":[\"0:23\"]},{\"tk\":[62,16,62,23],\"els\":[\"0:23\"]},{\"tk\":[62,24,62,25],\"els\":[\"0:23\"]},{\"tk\":[62,26,62,38],\"els\":[\"0:18\"]},{\"tk\":[62,39,62,44],\"els\":[\"0:18\"]},{\"tk\":[62,45,62,46],\"els\":[\"0:6\"]},{\"tk\":[62,47,62,59],\"els\":[\"0:19\"]},{\"tk\":[62,60,62,66],\"els\":[\"0:19\"]},{\"tk\":[69,3,69,15],\"els\":[\"0:24\"]},{\"tk\":[69,16,69,23],\"els\":[\"0:24\"]},{\"tk\":[69,24,69,25],\"els\":[\"0:24\"]},{\"tk\":[69,27,69,39],\"els\":[\"0:19\"]},{\"tk\":[69,40,69,46],\"els\":[\"0:19\"]},{\"tk\":[69,47,69,49],\"els\":[\"0:14\"]},{\"tk\":[69,50,69,53],\"els\":[\"0:14\",\"0:15\"]},{\"tk\":[77,3,77,15],\"els\":[\"0:27\"]},{\"tk\":[77,16,77,23],\"els\":[\"0:27\"]},{\"tk\":[77,24,77,25],\"els\":[\"0:27\"]},{\"tk\":[77,26,77,27],\"els\":[\"0:25:4\"]},{\"tk\":[77,34,77,35],\"els\":[\"0:25:4\"]},{\"tk\":[77,35,77,36],\"els\":[\"0:25:4\"]},{\"tk\":[77,44,77,45],\"els\":[\"0:25:3\"]},{\"tk\":[77,52,77,53],\"els\":[\"0:25:3\"]},{\"tk\":[77,53,77,65],\"els\":[\"0:26\"]},{\"tk\":[77,66,77,72],\"els\":[\"0:26\"]},{\"tk\":[77,73,77,74],\"els\":[\"0:25:2\"]},{\"tk\":[77,75,77,76],\"els\":[\"0:25:2\"]}]}}}","blocks":[{"RTWName":"<Root>/Input","SIDString":"Calculator:18"},{"RTWName":"<Root>/Input1","SIDString":"Calculator:19"},{"RTWName":"<Root>/Input2","SIDString":"Calculator:26"},{"RTWName":"<Root>/Add","SIDString":"Calculator:1"},{"RTWName":"<S1>/u","SIDString":"Calculator:25:1"},{"RTWName":"<S1>/FixPt\nBitwise\nOperator3","SIDString":"Calculator:25:2"},{"RTWName":"<S1>/FixPt\nBitwise\nOperator4","SIDString":"Calculator:25:3"},{"RTWName":"<S1>/FixPt\nBitwise\nOperator5","SIDString":"Calculator:25:4"},{"RTWName":"<S1>/y","SIDString":"Calculator:25:5"},{"RTWName":"<Root>/Constant2","SIDString":"Calculator:15"},{"RTWName":"<Root>/Divide","SIDString":"Calculator:6"},{"RTWName":"<Root>/Equal","SIDString":"Calculator:14"},{"RTWName":"<Root>/Product","SIDString":"Calculator:5"},{"RTWName":"<Root>/Subtract","SIDString":"Calculator:2"},{"RTWName":"<Root>/Output","SIDString":"Calculator:20"},{"RTWName":"<Root>/Output1","SIDString":"Calculator:21"},{"RTWName":"<Root>/Output2","SIDString":"Calculator:22"},{"RTWName":"<Root>/Output3","SIDString":"Calculator:23"},{"RTWName":"<Root>/Output4","SIDString":"Calculator:24"},{"RTWName":"<Root>/Output5","SIDString":"Calculator:27"},{"RTWName":"<Root>/Bit Clear","SIDString":"Calculator:25"}],"coverage":[{"id":"SimulinkCoverage","name":"Simulink Coverage","files":[]},{"id":"Bullseye","name":"Bullseye Coverage","files":[]},{"id":"LDRA","name":"LDRA Testbed","files":[]}]};