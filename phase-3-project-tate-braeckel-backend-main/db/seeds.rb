puts "🌱 Seeding things..."

# Seed your database here
# User.create(name: "Brooke", password: "password")
# User.create(name: "Bob", password: "1234")
# User.create(name: "David", password: "watermelon")


# Drawing.destroy_all


Subject.create!([
  {
  name: "Art",
 description: "blach blah",
 url: "http://localhost:3000/subjects/art"
},
{
  name: "Language Arts",
  description: "blach blah",
  url: "http://localhost:3000/subjects/language_arts"
},
{
  name: "Science",
  description: "blach blah",
  url: "http://localhost:3000/subjects/Science"
 
},
{
  name: "Theatre",
  description: "blach blah",
  url: "http://localhost:3000/subjects/theatre"

},
{
  name: "Drama",
  description: "blach blah",
  url: "http://localhost:3000/subjects/drama"
 
}
])


                        Resource.create!([
                          {
                            name: "the thingy resource",
                            description: "blah blah blah",
                            url: "www.faker.com",
                            subject_id: 1
                          },
                          {
                            name: "the thingy resource",
                            description: "blah blah blah",
                            url: "www.faker.com",
                            subject_id: 2
                          }, 
                          {
                            name: "the thingy resource",
                            description: "blah blah blah",
                            url: "www.faker.com",
                            subject_id: 3
                          }, 
                          {
                            name: "the thingy resource",
                            description: "blah blah blah",
                            url: "www.faker.com",
                            subject_id: 4
                          },
                          {
                            name: "the thingy resource",
                            description: "blah blah blah",
                            url: "www.faker.com",
                            subject_id: 5
                          },
                          {
                            name: "the pingy resource",
                            description: "blah blah blah",
                            url: "www.faker.com",
                            subject_id: 1
                          },
                          {
                            name: "the pingy resource",
                            description: "blah blah blah",
                            url: "www.faker.com",
                            subject_id: 2
                          }, 
                          {
                            name: "the pingy resource",
                            description: "blah blah blah",
                            url: "www.faker.com",
                            subject_id: 3
                          }, 
                          {
                            name: "the pingy resource",
                            description: "blah blah blah",
                            url: "www.faker.com",
                            subject_id: 4
                          },
                          {
                            name: "the pingy resource",
                            description: "blah blah blah",
                            url: "www.faker.com",
                            subject_id: 5
                          }
                        ])

puts "✅ Done seeding!"
