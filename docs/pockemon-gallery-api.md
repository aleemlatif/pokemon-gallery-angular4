# Pokemon Gallery


## Pokemon names API

The names of each Pokemon are retrieved asynchronously using this RESTful API.

```
http://pokeapi.co/api/v2/pokemon?limit=151
```


Results are sorted by Pokemon number and this is the order they should be displayed (Pokemon number = array
index + 1).

A sample JSON being returned by the above API is a following:

```
{
  "count": 811,
  "previous": null,
  "results": [
      {
      "url": "https://pokeapi.co/api/v2/pokemon/1/",
      "name": "bulbasaur"
      },
      {
      "url": "https://pokeapi.co/api/v2/pokemon/2/",
      "name": "ivysaur"
      },
      {
      "url": "https://pokeapi.co/api/v2/pokemon/3/",
      "name": "venusaur"
      },
      
      ...
      
  ],
  "next": "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=151"
}

```
