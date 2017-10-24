def rectangle_area(a, b, c, d, e, f, g, h)
  bottom_left_x = a < e ? e : a
  bottom_left_y = b < f ? f : b
  top_right_x = c < g ? c : g
  top_right_y = d < h ? d : h
  intersection_area = 0
  if bottom_left_x < top_right_x && bottom_left_y < top_right_y
    intersection_area = (top_right_x - bottom_left_x) * (top_right_y - bottom_left_y)
  end
  (c-a)*(d-b) + (g-e)*(h-f) - intersection_area    
end