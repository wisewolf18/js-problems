const rps = (p1, p2) => {
    var map = {
      'rock': 'scissors',
      'scissors': 'paper',
      'paper': 'rock'
    };
    
    if (p1 == p2) {
      return 'Draw!';
    } else {
      return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
    }
  };