export default function(error){
    switch (error) {
        /*
        case "auth/invalid-email":
            return "Invalid email."
        case "auth/email-already-exists":
            return "Email already exists."
        case "auth/user-not-found":
            return "User notfound."
        case "auth/weak-password":
            return "Weak password.."
        case "auth/wrong-password":
            return "Wrong password."*/
        default:
            const errorCode=error.slice(error.indexOf("/")+1)
            const errorCodeList=errorCode.split("-")
            errorCodeList[0]=errorCodeList[0][0].toUpperCase()+errorCodeList[0].slice(1)
            return [...errorCodeList,"."].join(" ")
    }
}