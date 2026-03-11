---
title: "How Blockchain Works: Explained in Simple Terms"
date: "2024-04-22"
excerpt: "How Blockchain Works: Explained in Simple Terms Blockchain is a […]"
featuredImage: "/assets/blog/2024/04/unnamed-9.webp"
ogTitle: "How Blockchain Works: Explained in Simple Terms » Hcode's offical Blog"
ogDescription: "A blockchain is a decentralized, distributed ledger that records transactions across multiple computers in a secure and immutable manner."
categories: ["Blockchain Technology"]
tags: []
---

## How Blockchain Works: Explained in Simple Terms

![](/assets/blog/2024/04/unnamed-8.webp)

Blockchain is a fascinating technology that has piqued the interest of many people, but its inner workings can be quite hard to understand. When searching online for information, the explanations available are often repetitive and generic, failing to satisfy the curiosity of those seeking to truly understand what blockchain is and how it functions.

Thus, [HCode Technologies](https://hcode.tech/), as a leading blockchain service provider, felt the need to explain the concept in easy terms. So, let us get started.

_**“Blockchain technology enables transparent, secure, and decentralized record-keeping, revolutionizing industries through its immutable ledger and trust-building capabilities.”**_

**– Shashank (CEO of HCode Technologies)**

Blockchain doesn’t look like blocks connected with chains; it is just a collection of data, in encrypted form, stored in a ledger format. Actual encrypted data looks like the image below.

**Data:**

![ Example of data that can be converted into hash.](/assets/blog/2024/04/unnamed-1.webp)

**Hash:**

![Hash number, a 256-bit number with 64 characters](/assets/blog/2024/04/unnamed-2.webp)

You can try it for yourself here: [SHA 256 DEMO](https://emn178.github.io/online-tools/sha256.html).

So, to define blockchain– it is a **decentralized or distributed** network of digital ledgers organized in a connected sequence. It means that the encrypted data (data of any sort – medical, transactions, records, etc.) is distributed among its users; the only way to add new data to the ledger is by everyone’s consensus.

When the data is distributed among so many parties and systems; it becomes next to impossible to tamper with the records. Because even if someone does, records from the majority systems will say otherwise and the fraudulent record will be discarded.

In simple terms

#### ‘A person needs to have control over 51% or more nodes to tamper with a blockchain, assuming bitcoin, which makes it billions of dollars of investment, which is practically not feasible.’

But that’s just one way to tamper with data. Blockchain is one of the safest publicly available technology, i.e. it has many other protection layers to protect it against double-spending, hackers, etc. Let us discuss this along with answering how blockchain works in simple terms.

### Blockchain Mining Process

![An image demonstrating the blockchain mining process. Robots are creating blocks and data encryption is under process.](/assets/blog/2024/04/unnamed-9.webp)

To understand blockchain we need to define some terms that we are not familiar with:

**Hash:** A hash is a unique string of characters generated from data using a specific algorithm, like SHA-256. It’s not random; the same input always produces the same output.  
(Showed above)

**Block:** A block is a group of transactions bundled together and given a unique identifier called a hash. It also contains other information like the time it was created and a reference to the previous block.

**Mempool:** The mempool is where pending transactions wait to be added to a block and confirmed on the blockchain.

**Miners:** Miners are participants in the network who use powerful computers to compete to create new blocks. They don’t verify transactions directly but instead validate blocks by solving complex mathematical puzzles.

**Private and Public Key:** A private key is a secret code known only to its owner and is used to sign transactions. A public key, derived from the private key, is shared publicly and used to verify the signature and ensure the transaction’s authenticity.

**Consensus Mechanism:** This is a method used to ensure that all participants in the network agree on the validity of transactions and the state of the blockchain.

Examples include **Proof of Work (PoW)** and Proof of Stake (PoS).

Let us assume that Sohan wants to buy a car from Mohan via Ethereum. So what he does is, add Mohan’s account details and send him the ETHs.

![A flow chart demonstrating the working of blockchain, step by step. From data request, verification, encryption, and block formation to Proof of Work and the addition of a block into a blockchain.](/assets/blog/2024/04/unnamed-3.webp)

#### Step 1 – Transaction Check

The transaction request went to mempool to wait for miners to pick them up. Miners, who want to get rewarded for adding a block to the blockchain, quickly pick up the request and check for its authenticity.

They authenticate the transaction by verifying the **cryptographic signatures** and ensuring that they match the public keys associated with the sender’s addresses. Once the transactional entities are verified, miners begin to construct the block.

#### Step 2 – Block Creation

Miners construct a block by bundling these transactions (if Sohan has more than one transaction) together with a block header containing metadata such as a timestamp, a reference to the previous block, and a nonce.

Timestamp is the time at which the block was created. Blocks are connected as they refer to their previous block becoming a long immutable chain, it is done so by including the **hash value of the previous block’s header** in the current block’s header.

The nonce is a number used in the Proof of Work (PoW) mining process, which we have discussed in more detail further in the article.

#### Step 3 – Transaction Verification: Consensus Mechanism

In a decentralized network like a blockchain, there’s no central authority to verify transactions. Then who is accountable for ensuring the accuracy of transactions?

**The Consensus mechanisms.**

They ensure all participants agree on the validity and order of transactions, creating a secure and trustworthy system. In the case of Ethereum, it is Proof of Work (PoW).

**So what is Proof of work?**

PoW is a system designed to authenticate the data entry process without being **monopolized.** PoW ensures everyone agrees on the order of transactions and prevents unauthorized modifications to the blockchain.

**But how does blockchain ensure that no benefiting party is involved in the mining process?**

PoW achieves this by requiring miners to compete to solve complex puzzles to validate transactions and add new blocks to the blockchain. It is a **randomized trial-and-error process**, everyone tries random hash values to solve the puzzle and the first one to find the solution adds the block. This process not only secures the network but also randomly selects a validator, preventing any single entity from dominating the network.

**But, if someone picks the block that he wants to modify and uses high computing power to solve the problem faster, how will the rest of the miners compete?**

Well, this can again lead to monopoly!!

But thankfully, this problem is also accounted for with the introduction of nounce. It is a random number added to the block data before hashing which is different for each miner. It helps prevent miners from simply copying other miners’ attempts and makes the puzzle unique for each miner.

So even with more computing power, a miner may still struggle to find the right hash because they have a different puzzle altogether. And someone, with less computing power, might even solve it on its first try.

#### Step – 4 Integration

Once a miner solves the puzzle, they can add the block to the blockchain. The miner then notifies the network about the successful addition of the block, which is later confirmed by another miner. After confirmation, the block is successfully added reaching its **finality.**

The block is now there, which can be checked by everyone; but no one can edit or change it ever again.

You might be wondering: if my transaction is public and visible to anyone, doesn’t that compromise my privacy?

Indeed, you’re correct. In a public blockchain, transactions are transparent and accessible to all. However, this raises privacy concerns. Fortunately, innovative solutions have emerged to address this issue. One such solution is [Zero-knowledge proof](https://chain.link/education/zero-knowledge-proof-zkp#:~:text=Zero%2DKnowledge%20Proof%20Example,-A%20conceptual%20example&text=Alice%20wants%20to%20prove%20to,knowing%20which%20path%20was%20taken). It is a way to prove that the transaction actually happened without actually revealing the details of the transactions.

Intriguing right!!

Well, we know it still doesn’t cover nodes and how the PoW works, but that’s a topic for another day. Till then- read our other articles to get more exciting blockchain information.

### Conclusion

Blockchain technology has become widely known through cryptocurrencies, but its potential lies beyond that. It can be [applied in healthcare](https://hcode.tech/blog/7-mainstream-applications-of-blockchain-technology-in-business/), finance, [cloud computing](https://hcode.tech/blog/blockchain-in-cloud-computing-significance-benefits-and-applications/), and many other fields.

Blockchain technology offers a lot more than just smart contracts. It provides a secure and tamper-proof solution for applications where trust is essential during the development, scaling, and implementation stages. This is where [Hcode](https://hcode.tech/our-services/blockchain) comes in.

We work with you to determine the challenges you are facing and develop blockchain-powered solutions that enable you to take advantage of this technology’s potential without being overwhelmed by technical complexities.
