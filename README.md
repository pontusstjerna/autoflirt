# Autoflirt API
This is an API to generate raggningsrepliker. 

Base URL is `http://ragga.nocroft.se/api`.

## Usage

* `/se?mean={true/false}&serious={true/false}` - returns an arbitrary pick up line. The `mean` and `serious` 
query parameters are optional and will default to `mean=false` and `serious=true`. 

* `/se/count` - returns the number of unique pick up lines currently available based on the 
words in the database.   
