function IcebreakerResponse(email){
  this.email = email

  IcebreakerResponses.BatchCreate = function(emails){
  return emails.map(function(icebreakerResponseEmail){
    return new IcebreakerResponse(icebreakerResponseEmail[0], icebreakerResponseEmail[1])
  })
}
const emails = ["avi@flatironschool.com", "grace@hopper.com", "alan@xparc.com"]

let icebreakerResponses = IcebreakerResponses.BatchCreate(emails)
