/**
 * Created by aaron.goshine on 22/09/2015.
 */

describe("Cookie-bake-off", function() {

    var testHash = {
        test_anonymous_id: "%22eb131123-f9cf-4916-b708-4c35093e6364%22",
        test_user_id: 372323,
        test_group_id: null,
        test_token: "5wEDbvlBaJuyOF9VqJ3WIjCbvwGTlRI5"
    }


    beforeEach(function() {
        for(var t in testHash){
           cookieMonStore.set(t,testHash[t],1)
        }
    });

    it("cookies should be set", function() {
      var value = cookieMonStore.get("test_anonymous_id");
        expect(value).toEqual(testHash.test_anonymous_id);
    });

    it("cookies should be null", function() {
        cookieMonStore.delete("test_anonymous_id");
        expect(cookieMonStore.get("test_anonymous_id")).toEqual(null);
    });

    it("cookies should be hashed", function() {
        var hash = cookieMonStore.getHash();
        for(var key in  testHash){
            expect(String(hash[key])).toEqual(String(testHash[key]));
        }
    });
});
