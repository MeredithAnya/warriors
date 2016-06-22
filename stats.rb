class NBAPlayer
  attr_accessor :firstname, :lastname, :games, :MINS, :FGM, :FGA, :FGP, :TPM, :TPA, :TPP, :FTM, :FTA, :FTP, :OREB, :DREB, :REB, :AST, :TOV, :STL, :BLK, :PF, :PTS
  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
  end

  def add_to_average(attribute, data)
    puts attribute
    puts data
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
curry =  NBAPlayer.new("Stephen", "Curry")
green =  NBAPlayer.new("Draymond", "Green")
ezeli =  NBAPlayer.new("Festus", "Ezeli")
thompson = NBAPlayer.new("Klay", "Thompson")
barnes = NBAPlayer.new("Harrison", "Barnes")

PLAYERS = {"Curry" => curry,
            "Green" => green,
            "Ezeli" => ezeli,
            "Thompson" => thompson}

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

def find_player(lastname)
  player = nil
  PLAYERS.each do |name, object|
    player = object if name == lastname
  end
  player
end

def handle_stats(stats)
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

  player = find_player(lastname)
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
  player
end

def readfile
  final = []
  (1...5).each do |num|
    a = File.new("./game_stats/game#{num}.txt")
    words = []
    a.readlines.each do |line|
      stats = line.split(" ")
      handle_stats(stats)
    end
    final << words
  end
  final
end
