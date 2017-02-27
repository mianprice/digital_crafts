#Play Again Function 2 (Recursive)

def play_again():
    x = str(raw_input("Do you want to play again? (y/n):"))
    if x == "y" or x == "Y":
        return True
    elif x == "n" or x == "N":
        return False
    else:
        print "Invalid input"
        return play_again()

print play_again()
