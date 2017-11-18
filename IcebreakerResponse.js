function IcebreakerResponse(email){
  this.email = email

  IcebreakerResponse.BatchCreate = function(email){
  return data.map(function(icebreakerResponseEmail){
    return new IcebreakerResponse(icebreakerResponseEmail[0], icebreakerResponseEmail[1])
  })
}
const email = []

let users = User.BatchCreate(data)
