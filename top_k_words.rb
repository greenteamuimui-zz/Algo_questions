def top_k_frequent1(words, k)
  count = Hash.new(0)
  words.each do |w|
    count[w] += 1     
  end
  count = count.keys.group_by{ |k| count[k]}
  count = count.keys.sort.reverse.map{ |k| count[k].sort }
end
top_k_frequent1(["i", "love", "leetcode", "i", "love", "coding"],2)


def top_k_frequent(words, k)
  length = words.count
  count = Hash.new(0)
  words.each do |w|
      count[w] += 1     
  end
  sorted = count.sort_by{|k,v| v}
  frequency_hash = Hash.new
  count.each do |k,v|
      frequency_hash[v] = Array.new unless frequency_hash[v]
      frequency_hash[v].push(k)
  end
  ans = []
  length.downto(1).each do |i|
    if frequency_hash[i]
      sorted_words = frequency_hash[i].sort 
      i = 0
      while ans.count < k && sorted_words[i]
        ans.push(sorted_words[i])
        i += 1
      end
    end
  end
  ans
end