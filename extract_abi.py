import json

with open("./build/contracts/Post.json", "r") as f:
    ABI = json.load(f)["abi"]

    with open("./Post_ABI.json", "w+") as w:
        json.dump(ABI, w)
