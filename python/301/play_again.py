#Play Again Function
def play_again():
    x = str(raw_input("Do you want to play again? (y/n):"))
    if x == "y":
        return True
    elif x == "n":
        return False

print play_again()
