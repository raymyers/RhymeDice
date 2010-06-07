module ChoiceHelper
  def phonemes()
    [
    {:symbol => "i", :word => "FLEECE"},
    {:symbol => "u", :word => "GOOSE"},
    {:symbol => "ɪ", :word => "KIT"},
    {:symbol => "ʊ", :word => "FOOT"},
    {:symbol => "e", :word => "FACE"},
    {:symbol => "ɚ", :word => "NURSE"},
    {:symbol => "o", :word => "GOAT"},
    {:symbol => "ɛ", :word => "DRESS"},
    {:symbol => "ʌ", :word => "STRUT"},
    {:symbol => "ɔ", :word => "THOUGHT"},
    {:symbol => "æ", :word => "TRAP"},
    {:symbol => "ɑ", :word => "LOT"}
    ]
  end
  
  def topics()
    %w(Physics Regions Theories)
  end
end
