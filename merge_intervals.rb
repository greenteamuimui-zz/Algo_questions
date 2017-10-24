class Interval
    attr_accessor :start, :end
    def initialize(s=0, e=0)
        @start = s
        @end = e
    end
end

def merge(intervals)
  return intervals if intervals.length == 0
  intervals = intervals.sort{|a,b| a.start <= b.start ? -1 : 1 }
  start_int = intervals[0].start
  end_int =  intervals[0].end
  ans = []
  intervals[1..-1].each do |interval|
      new_start = interval.start
      if new_start <= end_int
          end_int = end_int > interval.end ? end_int : interval.end
      else
          ans.push([start_int, end_int])
          start_int = new_start
          end_int = interval.end
      end
  end
  ans.push([start_int, end_int])
end
merge([[1,4],[0,4]])