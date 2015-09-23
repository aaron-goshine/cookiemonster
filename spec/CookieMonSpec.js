/**
 * Created by aarongoshine1 on 22/09/2015.
 */


// ajs_anonymous_id=%22eb131123-f9cf-4916-b708-4c35093e6364%22;ajs_user_id=null;ajs_group_id=null;csrftoken=5wEDbvlBaJuyOF9VqJ3WIjCbvwGTlRI5

var testSource = {
    test_ajs_anonymous_id: "%22eb131123-f9cf-4916-b708-4c35093e6364%22",
    test_ajs_user_id: 372323,
    test_ajs_group_id: null,
    test_js_anonymous_id: "undefined",
    test_csrftoken: "5wEDbvlBaJuyOF9VqJ3WIjCbvwGTlRI5"
}


for(var t in testSource){
    cookieMonStore.set(t,testSource[t],30)
    console.info(t);
}
//    console.log(document.cookie.split(";").join("\n"));
console.log("==============");
for(var t in testSource){
    console.log(cookieMonStore.get(t));
}
console.log("==============");
for(var t in testSource){
    cookieMonStore.delete(t)
}
console.log("==============");

for(var t in testSource){
    console.log(cookieMonStore.get(t))
}

console.log("==============end");

