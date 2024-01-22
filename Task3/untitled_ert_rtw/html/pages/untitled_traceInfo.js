function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "untitled"};
	this.sidHashMap["untitled"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "untitled:41"};
	this.sidHashMap["untitled:41"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "untitled:47"};
	this.sidHashMap["untitled:47"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "untitled:54"};
	this.sidHashMap["untitled:54"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<Root>/Input"] = {sid: "untitled:45"};
	this.sidHashMap["untitled:45"] = {rtwname: "<Root>/Input"};
	this.rtwnameHashMap["<Root>/Input1"] = {sid: "untitled:46"};
	this.sidHashMap["untitled:46"] = {rtwname: "<Root>/Input1"};
	this.rtwnameHashMap["<Root>/If"] = {sid: "untitled:40"};
	this.sidHashMap["untitled:40"] = {rtwname: "<Root>/If"};
	this.rtwnameHashMap["<Root>/If Action Subsystem"] = {sid: "untitled:41"};
	this.sidHashMap["untitled:41"] = {rtwname: "<Root>/If Action Subsystem"};
	this.rtwnameHashMap["<Root>/If Action Subsystem1"] = {sid: "untitled:47"};
	this.sidHashMap["untitled:47"] = {rtwname: "<Root>/If Action Subsystem1"};
	this.rtwnameHashMap["<Root>/Merge"] = {sid: "untitled:51"};
	this.sidHashMap["untitled:51"] = {rtwname: "<Root>/Merge"};
	this.rtwnameHashMap["<Root>/Signal Conversion"] = {sid: "untitled:55"};
	this.sidHashMap["untitled:55"] = {rtwname: "<Root>/Signal Conversion"};
	this.rtwnameHashMap["<S1>/Input1"] = {sid: "untitled:42"};
	this.sidHashMap["untitled:42"] = {rtwname: "<S1>/Input1"};
	this.rtwnameHashMap["<S1>/Action Port"] = {sid: "untitled:43"};
	this.sidHashMap["untitled:43"] = {rtwname: "<S1>/Action Port"};
	this.rtwnameHashMap["<S1>/Add"] = {sid: "untitled:52"};
	this.sidHashMap["untitled:52"] = {rtwname: "<S1>/Add"};
	this.rtwnameHashMap["<S1>/Constant"] = {sid: "untitled:53"};
	this.sidHashMap["untitled:53"] = {rtwname: "<S1>/Constant"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "untitled:44"};
	this.sidHashMap["untitled:44"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>/Input"] = {sid: "untitled:48"};
	this.sidHashMap["untitled:48"] = {rtwname: "<S2>/Input"};
	this.rtwnameHashMap["<S2>/Action Port"] = {sid: "untitled:49"};
	this.sidHashMap["untitled:49"] = {rtwname: "<S2>/Action Port"};
	this.rtwnameHashMap["<S2>/Increment Real World"] = {sid: "untitled:54"};
	this.sidHashMap["untitled:54"] = {rtwname: "<S2>/Increment Real World"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "untitled:50"};
	this.sidHashMap["untitled:50"] = {rtwname: "<S2>/Out1"};
	this.rtwnameHashMap["<S3>/u"] = {sid: "untitled:54:1"};
	this.sidHashMap["untitled:54:1"] = {rtwname: "<S3>/u"};
	this.rtwnameHashMap["<S3>/FixPt Constant"] = {sid: "untitled:54:2"};
	this.sidHashMap["untitled:54:2"] = {rtwname: "<S3>/FixPt Constant"};
	this.rtwnameHashMap["<S3>/FixPt Data Type Duplicate"] = {sid: "untitled:54:3"};
	this.sidHashMap["untitled:54:3"] = {rtwname: "<S3>/FixPt Data Type Duplicate"};
	this.rtwnameHashMap["<S3>/FixPt Sum1"] = {sid: "untitled:54:4"};
	this.sidHashMap["untitled:54:4"] = {rtwname: "<S3>/FixPt Sum1"};
	this.rtwnameHashMap["<S3>/y"] = {sid: "untitled:54:5"};
	this.sidHashMap["untitled:54:5"] = {rtwname: "<S3>/y"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
