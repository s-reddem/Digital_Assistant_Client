var oldudaplugin = UDAPluginSDK.recorduserclick;
UDAPluginSDK.recorduserclick = function(node, fromdocument=false, selectchange=false, event, confirmdialog=false, hasparentclick = false){
    console.log('click overridden');
    oldudaplugin(node, fromdocument, selectchange, event, confirmdialog, hasparentclick);
};

// oldudaplugin.recorduserclick(node, fromdocument, selectchange, event, confirmdialog, hasparentclick);
