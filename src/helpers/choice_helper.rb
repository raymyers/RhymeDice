module ChoiceHelper
  def phonemes()
    [
    {:symbol => "i", :words => %w(Fleece Neece East Priest)},
    {:symbol => "u", :words => %w(Goose Loose Moose)},
    {:symbol => "ɪ", :words => %w(Kit Spit Knit Win)},
    {:symbol => "ʊ", :words => %w(Foot Book Crook Shook)},
    {:symbol => "e", :words => %w(Face Mace Place Taste)},
    {:symbol => "ɚ", :words => %w(Nurse Verse Purse First)},
    {:symbol => "o", :words => %w(Goat Throat Gloat Wrote)},
    {:symbol => "ɛ", :words => %w(Dress Press Flesh Stretch)},
    {:symbol => "ʌ", :words => %w(Strut Cut What Rust)},
    {:symbol => "ɔ", :words => %w(Thought Caught Bought)},
    {:symbol => "æ", :words => %w(Trap Slap Gap Map)},
    {:symbol => "ɑ", :words => %w(Lot Not Spot Hot Trot)}
    ]
  end
  
  def topics()
    %w(Physics Chemistry Biology Regions Theories Hopes Fears Gender Relationships Sex Romance Language Politics Leaders Artists Painters Musicians Poets Ecosystems Climates Plants Animals Time Past Future Religeon Superstition Rituals Fanbase Skills Medicine Pain Death)
  end
end
