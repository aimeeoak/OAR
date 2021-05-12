# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

jimmy = User.create(name: "Jimmy", email: "jimmy@dude.com")

jimmy_project = Project.create(name: "Jimmy's Project", description: "all about jimmy", user: jimmy)

Article.create(title: "cesare borgia is a furry", authors: "nally, christian", language: "english?", keywords: "borgia, furry, italy", content: "dhglksdhkglhdsjghslkfhsdjlgksdjghdklghsdlkgbsdhgjksdgjsdhfs", flagged: true, project: jimmy_project) 
