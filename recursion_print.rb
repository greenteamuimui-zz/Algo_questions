data = [
  {"owner" : "Cherry", "owned_thing": "Clover stock", "value": "100 shares"},
  {"owner" : "Cherry", "owned_thing": "Cherry's 401k", "value": "100%"},
  {"owner" : "Cherry", "owned_thing": "Lonsdale Trust", "value": "50%"},
  {"owner" : "Lonsdale Trust", "owned_thing": "Google", "value": "1000 shares"},
  {"owner" : "Lonsdale Trust", "owned_thing": "Berkshire", "value": "82 shares"},
  {"owner" : "Lonsdale Trust", "owned_thing": "Facebook", "value": "400 shares"},
  {"owner" : "Lonsdale Trust", "owned_thing": "Microsoft", "value": "430 shares"},
  {"owner" : "Lonsdale Trust", "owned_thing": "Caterpillar", "value": "100 shares"},
  {"owner" : "Cherry's 401k", "owned_thing": "Goldman Sachs", "value": "200 shares"},
  {"owner" : "Cherry's 401k", "owned_thing": "Microsoft", "value": "330 shares"},
  {"owner" : "Cherry's 401k", "owned_thing": "Clover", "value": "220 shares"},
  {"owner" : "Cherry's 401k", "owned_thing": "Tree House", "value": "100%"},
  {"owner" : "Lonsdale Trust", "owned_thing": "Lonsdale Holdings", "value": "33%"},
  {"owner" : "Lonsdale Holdings", "owned_thing": "Beachfront Property", "value": "100%"},
  {"owner" : "Lonsdale Holdings", "owned_thing": "Widgets Inc", "value": "50%"}
];

def printThings(data)
  data.each do |hash|
    owner = hash.owner
    if hash.owner == owner
      p hash.owned_thing
    end
end

def recursionPrint(data)
  
end