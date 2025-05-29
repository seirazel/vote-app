poll = Poll.create!(title: "What is your favorite language?")
poll.votes.create!(option: "Ruby")
poll.votes.create!(option: "JavaScript")
poll.votes.create!(option: "Python")

poll2 = Poll.create!(title: "What is your favorite framework?")
poll2.votes.create!(option: "Ruby on Rails")
poll2.votes.create!(option: "React")
poll2.votes.create!(option: "Django")

poll3 = Poll.create!(title: "What is your favorite database?")
poll3.votes.create!(option: "PostgreSQL")
poll3.votes.create!(option: "MySQL")
poll3.votes.create!(option: "SQLite")

poll4 = Poll.create!(title: "What is your favorite programming paradigm?")
poll4.votes.create!(option: "Object-Oriented")
poll4.votes.create!(option: "Functional")
poll4.votes.create!(option: "Procedural")

poll5 = Poll.create!(title: "What is your OS")
poll5.votes.create!(option: "Linux")
poll5.votes.create!(option: "Windows")
poll5.votes.create!(option: "MacOS")
