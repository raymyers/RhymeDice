module ChoiceHelper
  def phonemes()
    [
    {:symbol => "i", :word => "Fleece"},
    {:symbol => "u", :word => "Goose"},
    {:symbol => "ɪ", :word => "Kit"},
    {:symbol => "ʊ", :word => "Foot"},
    {:symbol => "e", :word => "Face"},
    {:symbol => "ɚ", :word => "Nurse"},
    {:symbol => "o", :word => "Goat"},
    {:symbol => "ɛ", :word => "Dress"},
    {:symbol => "ʌ", :word => "Strut"},
    {:symbol => "ɔ", :word => "Thought"},
    {:symbol => "æ", :word => "Trap"},
    {:symbol => "ɑ", :word => "Lot"}
    ]
  end
  
  def topics()
    %w(Physics Chemistry Biology Regions Theories Hopes Fears Gender Relationships Sex Romance Language Politics Leaders Artists Painters Musicians Poets Ecosystems Climates Plants Animals Time Past Future Religeon Superstition Rituals Fanbase Skills Medicine Pain Death)
  end
end
