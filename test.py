def update_text(word):
    try:
        vowels = "aeiouAEIOU"
        new_word = ''.join(['x' if letter in vowels else letter for letter in word])
        return new_word
    except ValueError:
        return "Error: La cadena contiene un valor no válido."
    except Exception as e:
        return f"Error: {e}"

def plus_peers(my_list):
    try:
        peers = [num for num in my_list if num % 2 == 0]
        plus_peers = sum(peers)
        return plus_peers
    except TypeError:
        return "Error: La lista contiene un tipo de dato no válido."
    except Exception as e:
        return f"Error: {e}"

word = "Hola, mundo!"
word_updated = update_text(word)
print(word_updated)

my_list = [1, 2, 3, "cuatro", 5, 6, 7, 8, 9, 10]
result = plus_peers(my_list)
print(result)