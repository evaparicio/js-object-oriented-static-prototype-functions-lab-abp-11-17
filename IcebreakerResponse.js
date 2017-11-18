function IcebreakerResponse(email){
  this.email = email;
  this.BatchCreate()
  IcebreakerResponse.BatchCreate = function(emails){
    return emails.map(function(icebreakerResponses){
      return new IcebreakerResponse(icebreakerResponses[0], icebreakerResponses[1])
  })
}}
const email =[
  ["avi@flatironschool.com"],
  ["grace@hopper.com"],
  ["alan@xparc.com"]
]

const icebreakerResponses = IcebreakerResponse.BatchCreate(emails)
