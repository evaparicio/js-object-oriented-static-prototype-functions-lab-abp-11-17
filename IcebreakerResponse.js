function IcebreakerResponse(email){
  this.email = email

  IcebreakerResponse.BatchCreate = function(emails){
    return emails.map(function(icebreakerResponses){
    return new IcebreakerResponse(icebreakerResponses[0], icebreakerResponses[1])
  })
}
const emails = ["avi@flatironschool.com", "grace@hopper.com", "alan@xparc.com"]

let icebreakerResponses = IcebreakerResponse.BatchCreate(emails)
