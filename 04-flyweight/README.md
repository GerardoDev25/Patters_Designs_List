# Flyweight Pattern

## Description
The flyweight pattern is a design pattern that allows us to use less memory when we need to create a huge number of objects that are the same type.
This pattern consists in that before creating a new instance, we will check if the object already exists by finding it in a list of objects that have been created before through an ID. If the object exists, we will only create a new objects based on its different properties. But if the object doesn't exist, we will create a new instance that all.