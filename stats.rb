class NBAPlayer
  attr_accessor :firstname, :lastname, :games, :MINS, :FGM, :FGA, :FGP, :TPM, :TPA, :TPP, :FTM, :FTA, :FTP, :OREB, :DREB, :REB, :AST, :TOV, :STL, :BLK, :PF, :PTS
  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
  end

  def add_to_average(attribute, data)
    current_average = self.send(attribute.to_sym)
    if current_average.nil?
      self.send("#{attribute}=".to_sym, data)
    else
      new_average = ((current_average * games) + data) / (games + 1)
      self.send("#{attribute}=".to_sym, new_average)
    end
  end

  def add_game
    if games.nil?
      @games = 1
    else
      @games = games + 1
    end
  end

end


STATS_HASH = {
  1 => "MINS",
  2 => "FGM",
  3 => "FGA",
  4 => "FGP",
  5 => "TPM",
  6 => "TPA",
  7 => "TPP",
  8 => "FTM",
  9 => "FTA",
  10 => "FTP",
  11 => "OREB",
  12 => "DREB",
  13 => "REB",
  14 => "AST",
  15 => "TOV",
  16 => "STL",
  17 => "BLK",
  18 => "PF",
  19 => "PTS"
}

def find_player(firstname, lastname, players)
  fullname = firstname + " " + lastname
  player = nil
  players.each do |name, object|
    player = object if name == fullname
  end
  player
end

def handle_stats(stats, players)
  firstname = stats.first
  lastname = stats[1]
  count = 2
  #only person with a middle name
  if lastname == "Michael"
    firstname = "James Michael"
    lastname = "McAdoo"
    if stats[3] == "-"
      count = 5
    else
      count = 3
    end
  end
  #if player starts a game
  if stats[count] == "-"
    count = 4
  end

  player = find_player(firstname, lastname, players)
  stats_num = 1

  if player
    player.add_game
    #add all the stats to create new averages
    (count...stats.length - 1).each do |ind|
      attribute = STATS_HASH[stats_num]
      data = stats[ind].to_f
      player.add_to_average(attribute, data)
      stats_num += 1
    end
  end
  player
end

def readfile
  curry =  NBAPlayer.new("Stephen", "Curry")
  green =  NBAPlayer.new("Draymond", "Green")
  ezeli =  NBAPlayer.new("Festus", "Ezeli")
  thompson = NBAPlayer.new("Klay", "Thompson")
  barnes = NBAPlayer.new("Harrison", "Barnes")
  bogut = NBAPlayer.new("Andrew", "Bogut")
  iguodala = NBAPlayer.new("Andre", "Iguodala")
  livingston = NBAPlayer.new("Shaun", "Livingston")
  clark = NBAPlayer.new("Ian", "Clark")
  mcadoo = NBAPlayer.new("James Michael", "McAdoo")
  rush = NBAPlayer.new("Brandon", "Rush")
  speights = NBAPlayer.new("Marreese", "Speights")
  barbosa = NBAPlayer.new("Leandro", "Barbosa")
  jthompson = NBAPlayer.new("Jason", "Thompson")

  players = {"Stephen Curry" => curry,
              "Draymond Green" => green,
              "Festus Ezeli" => ezeli,
              "Klay Thompson" => thompson,
              "Harrison Barnes" => barnes,
              "Andrew Bogut" => bogut,
              "Andre Iguodala" => iguodala,
              "Shaun Livingston" => livingston,
              "Ian Clark" => clark,
              "James Michael McAdoo" => mcadoo,
              "Brandon Rush" => rush,
              "Marreese Speights" => speights,
              "Jason Thompson" => jthompson,
              "Leandro Barbosa" => barbosa}


  (1...11).each do |num|
    a = File.new("./game_stats/game#{num}.txt")
    words = []
    a.readlines.each do |line|
      stats = line.split(" ")
      handle_stats(stats, players)
    end
  end
  players
end

# STATS I CARE ABOUT:

# [17] pry(main)> players["Stephen Curry"].TPP
# => 45.71818181818182
# [18] pry(main)> players["Stephen Curry"].FGP
# => 52.809090909090905
# [19] pry(main)> players["Stephen Curry"].FTP
# => 90.87272727272729
# [20] pry(main)> players["Stephen Curry"].REB
# => 5.363636363636363
# [21] pry(main)> players["Stephen Curry"].AST
# => 5.7272727272727275
# [22] pry(main)> players["Stephen Curry"].PTS
# => 33.90909090909091
