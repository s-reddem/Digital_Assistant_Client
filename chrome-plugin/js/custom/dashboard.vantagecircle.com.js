(function() {
    let originalUDAPluginSDKRecordUserClick = UDAPluginSDK.recorduserclick;
    UDAPluginSDK.recorduserclick = function(node, fromdocument=false, selectchange=false, event, confirmdialog=false, hasparentclick = false){
        if(this.recording && node.textContent.toLowerCase() === 'create challenge') {
            // fix for nominate recording functionality.
            alert('Sorry currently we do not support this feature. Please re-record the sequence without selecting Nominate feature');
            this.recording=false;
            this.cancelrecordingsequence();
            this.showadvancedhtml();
            return ;
        }
        originalUDAPluginSDKRecordUserClick.apply(this, arguments);
    };
})();
