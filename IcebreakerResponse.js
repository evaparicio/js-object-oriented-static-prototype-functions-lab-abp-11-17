function IcebreakerResponse(email) {
  this.email;
}

IcebreakerResponse.BatchCreate = function(emails){
    return emails.map(function(emails){
      return new IcebreakerResponse(email[0], email[1])
  })
}
const emails =[
  ["avi@flatironschool.com"],
  ["grace@hopper.com"],
  ["alan@xparc.com"]
]

const icebreakerResponses = IcebreakerResponse.BatchCreate(emails)
