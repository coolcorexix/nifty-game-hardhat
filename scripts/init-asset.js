// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const HerosToken = await hre.ethers.getContractFactory("CryptoHerosToken");
  const herosToken = await HerosToken.attach(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  );
  const numberImages = [
    "QmNbPeXSeUEg6oEhRVFa5uSwVdi8GbXewttkVKf3zX2oyX",
    "QmaJUZLbFN4D3HkjEWbUrUqJXtFfjEjVcbauE3YSh393ht",
    "QmSdjH5q4Y3h8Uv6knNL4wybgi5Kxrxbni335Y5ooMtKjg",
    "Qmdi4p96LLjrmgoj5pJRSLnorJZ4bzdddyrN2jjLM6fXke",
    "QmNnvqXtomFAiM34aJRd2rTimCyQnxeemHTLZWwxTGXeWa",
    "QmTMig9fwhU77oaWKMHYvMbb3b1wyWviWUxEeYHBdH2T9f",
    "QmQXDnUzPSfrQWLcc4vXeVyZquW8cPN4b3qU8zcpsf6ZDP",
    "QmQ8Hg8aXtqET4Apd6AGDLmeZTsi9JVvZnMdRGsvdYBgkx",
    "QmWQ3oxfnXzpw35wiGnrc2HNV3U6iT4eT6VpoEtLwdKUsT",
    "QmUHsb1T1NuEL1TDQMD1dENpZFYP9NsnLo2iohKR3ydz2t",
    "QmaQc91N7YvZ8NaxeQfe9xpiVErTH5EJqTiyWVjf6CnV9X",
    "QmYtQprzsas3NzA7v4i8y1PJf89bMdr3bUqEqLgXkmfN6X",
    "Qmcsu3ATk6cwhXSi2nhkeZqJc6Urk9o6sWX5ZapMDLhedA",
    "QmWCk6YgA13WZkF8exa1atTAFx6nzNaYbyYf2jZQRTEJyL",
    "QmVDYWJs9RNxX75agGWmKTyLrsaFEJqfFqEcDMVbg9Ftnq",
    "Qmd9Xyuf3zQiyPfjDisVwL6J4AcTJy4ycFWBXdCQmjupyk",
    "QmZPkZq2XjPVa1oWWLiVDii7okohRrUw1CuzJvicHwUsCa",
    "QmZguKxTcU6wpGoz9MUfy5nN4EHMFABHejUrTdjou2hJ1M",
    "QmWzdBNu1ikXvcXo7C1WyUk3FxWRnDo5gt2WKm14Rcs1Pc",
    "Qmf8MPrUF41e5N5rtXVEGZg5AC7m8NLsjqf9ad9fvwVSrw",
  ];
  const cardList = [
    "QmeARz345pVTS1CgT8YWrTiMnj8wk56nKBcbxEgSvVjpXE",
    "QmRmKvVZVPSAiFCXsa214mxBBibZqJM6aJWvmA8ndkc5ig",
    "QmRqYud4pr7gqJTX9YJYmwE9Xy7EkPt4bAz8mJUPKgvk3X",
    "QmcKZeiZg4Q1m8X1vxAGCWMYhn113ufT31UiQrfC51Jkdd",
    "QmRGeBTZroqhAdKkr47SKosECB8yJGTYrU8ckUdvBxDyu5",
    "QmS8zmqAcVwQ7eUSY1QawnLd3sbUAVgjpwTaUcSAtpEDR9",
    "QmYXFq6sLRN5iPUaRsG5neSHZMuQXaFHAg8LGKna3yvPiU",
    "QmT3G9RzgvXqtXnF79sVseUnJERvU9UA7o43RQh1wdfMPR",
    "QmbrWUkysFbt1AKZskPSeeVWYTPJevfiqtEN9DWy5gftkU",
    "QmeGxiwH7uvKMpwJ8673udXx7UbExVFmhVrAWBpM7uYyXD",
    "QmZjyyqjKL5cibcGhHvP5kp5cnptNy5z4RJ4ecUGkEjCHE",
    "QmZQ6xv21HYsJTVM9zxaGW6AGHE7rFFdVDF1euCsKXdcPG",
    "QmaKWivznExeXocW5hPWrFAhab1rdpiHw7c1WdqsvFT8Xc",
    "Qmey9MiEUWLSd4Kfr4LPj476z5pQ53CNJxxAqR6UmMCofQ",
    "Qmf79rRMGGUaoccybavoMXWkoZ2wUNKxwkPhHe7TjjWBXM",
    "QmVALBXYymSKPz5wN1JFVHrZmnNhz7JW8J8QM5zVrHmagk",
    "QmRUvsn4j65tn3GgynWDTEq88VGxnXkN2S5GvT5PEHo1hP",
    "QmXhPFrZHQRXmicJtNigkV3oCB23KTK8rwHJDKQrkGk39k",
    "QmVWd4RQqg1k6PqggZUY8tRafyZhwMZAZc1Qavpfdb3QZs",
    "QmfZ9111VoCssYnCRFjyKRRTaqE638Dys5duDLNqDUr7ZV",
  ];
  const backgroundList = [
    "Qmb9jK8bPGaWAVm46kxDMr2Hf1YWcNGiGRhxoRiTRvfNeW",
    "QmeJgkdZWnkwPuyhXkoKJEiKHq7h3cBazn8BsLiiWyeGm4",
    "QmZNUkkQrZ199WZEDuftsKCzfoYESor9fBmotjgYHrkGbx",
    "QmVJ68pmy84r58gbKyYBzt7AjDwUaCqFk7guEYqm9Wr6NL",
    "QmRgiejrcQaMx9vmma3YebrdPqyxwUasXTqToYjyHCLhPC",
    "QmTNtVi21mQuVpqsyY2qFDSi6jktvA9FZGp4Kjbyskaesc",
    "QmPgxySdWktfwUdP2kFdisnaW4HVyWjykKYZn1vmvzhmXu",
    "QmTU3PkpEhJA2AyartCkVSEmJJtCwo9qvVMg4CJi2a4DGJ",
    "QmNuY4DVZcouMJhWj99GyPVZGKpCe8caN7WpSKkjyU1wZc",
    "QmPmT4tc5hSLgmiJzjk92kNHpWGuaDHjQL6eWhpmwzpwVA",
    "QmRzxZLAt6iJ5ijNEALwug3kfxFxCSxQbvy4a7ucco4ZXC",
    "QmTcM5VyR1ceY31k2u1tYqqen1WzNGehoBcYNLJHePqQc3",
    "QmTZGi4Ee6oEgcTsHR72kbL1jrkpWe8YfZ7dmxMyKb42GY",
    "QmTVEnLKPYTBhZy3AAwpiVRP6fKiTxdF2426P3ri4nNpjH",
    "QmP9YNnJ5HresHPyKXuEViSS58iDGyBQDCC4NhxnXdTsAn",
    "QmTDfdUwLNTXJ1PgRqPxyW41jrdxhvh72C4h62dNhNgvtP",
    "QmPAa1joAw1MZGNyGxKpS7bwUXY3ty8eyXAhZBaGYV749c",
    "QmNUiebZznyunT7wD7Vydn87G9BVXQFYp8Gpk5odATiZey",
    "QmaMGoBBP79cAo3T5HzSS1qfA3HFi5S8PPd5JsFtwM58ud",
    "QmchyB9nScjWKdN5sVfZaRSPiEMirtMBbMkzkvBfVDPj9m",
  ];
  for (let i = 0; i < 20; i++) {
    await herosToken.initImage(cardList[i]);
    await herosToken.initBackground(
      backgroundList[i]
    );
    await herosToken.initNumberAndDescription(
      i+1,
      numberImages[i],
    );  
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
