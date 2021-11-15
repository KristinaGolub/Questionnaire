window.onload = (function () {
    var appId = 8001787;
    VK.init({
        apiId: appId 
    });
    function authInfo(response) {
        if (response.session) {
            var vkId = response.session.mid;
            console.log(vkId)
            VK.api("users.get", { uids: vkId, fields: "contacts" }, function (data) {
                console.log(data.response);
            });
        }
    }
    VK.Auth.getLoginStatus(authInfo);
});