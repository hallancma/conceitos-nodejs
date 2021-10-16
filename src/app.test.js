const rewire = require("rewire")
const app = rewire("./app")
const validateProjectId = app.__get__("validateProjectId")
// @ponicode
describe("validateProjectId", () => {
    test("0", () => {
        let object = [["ponicode.com", "http://www.croplands.org/account/confirm?t=", "https://twitter.com/path?abc"], ["www.google.com", "https://croplands.org/app/a/reset?token=", "https://api.telegram.org/"], ["https://croplands.org/app/a/reset?token=", "https://twitter.com/path?abc", "https://twitter.com/path?abc"]]
        let callFunction = () => {
            validateProjectId({ params: object }, { status: () => 500 }, () => "Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [["https://accounts.google.com/o/oauth2/revoke?token=%s", "https://", "https://croplands.org/app/a/reset?token="], ["Www.GooGle.com", "http://www.croplands.org/account/confirm?t=", "http://base.com"], ["ponicode.com", "https://croplands.org/app/a/confirm?t=", "https://api.telegram.org/bot"]]
        let callFunction = () => {
            validateProjectId({ params: object }, { status: () => 400 }, () => "Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [["https://api.telegram.org/", "http://www.example.com/route/123?foo=bar", "https://croplands.org/app/a/reset?token="], ["http://base.com", "https://api.telegram.org/", "ponicode.com"], ["https://twitter.com/path?abc", "Www.GooGle.com", "https://croplands.org/app/a/reset?token="]]
        let callFunction = () => {
            validateProjectId({ params: object }, { status: () => 429 }, () => "Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["https://twitter.com/path?abc", "https://twitter.com/path?abc", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"], ["ponicode.com", "https://croplands.org/app/a/reset?token=", "https://croplands.org/app/a/reset?token="], ["https://", "https://twitter.com/path?abc", "https://croplands.org/app/a/confirm?t="]]
        let callFunction = () => {
            validateProjectId({ params: object }, { status: () => 429 }, () => "Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [["https://croplands.org/app/a/confirm?t=", "https://twitter.com/path?abc", "Www.GooGle.com"], ["ponicode.com", "https://api.telegram.org/bot", "https://api.telegram.org/bot"], ["https://", "https://", "http://www.croplands.org/account/confirm?t="]]
        let callFunction = () => {
            validateProjectId({ params: object }, { status: () => 400 }, () => "Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            validateProjectId(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
