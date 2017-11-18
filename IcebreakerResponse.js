function IcebreakerResponse(email) {
  this.email;
}

IcebreakerResponse.BatchCreate = function(emails){
  return emails.map(function(email){
  return new IcebreakerResponse(email)
})
}

const icebreakerResponses = IcebreakerResponse.BatchCreate(emails)
