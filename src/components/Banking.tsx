import React, { useState } from "react";
import { Lock, CreditCard, CheckCircle, HelpCircle } from "lucide-react";

interface BankingProps {
  language: string;
}

const Banking: React.FC<BankingProps> = ({ language }) => {
  const [walletBalance, setWalletBalance] = useState(1000);
  const [billAmount, setBillAmount] = useState("");
  const [transactionStatus, setTransactionStatus] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  const handleWalletPayment = () => {
    const amount = parseFloat(billAmount);
    if (isNaN(amount) || amount <= 0) {
      setTransactionStatus(language === "english" ? "Please enter a valid amount" : "ଦୟାକରି ଏକ ବୈଧ ରାଶି ପ୍ରବେଶ କରନ୍ତୁ");
      return;
    }
    
    if (walletBalance >= amount) {
      setWalletBalance(walletBalance - amount);
      setBillAmount("");
      setTransactionStatus(language === "english" ? "Payment Successful!" : "ପେମେଣ୍ଟ ସଫଳ!");
    } else {
      setTransactionStatus(language === "english" ? "Insufficient Balance" : "ଅପର୍ଯ୍ୟାପ୍ତ ବାଲାନ୍ସ");
    }
  };

  const handleBankTransfer = (amount: number) => {
    if (walletBalance >= amount) {
      setWalletBalance(walletBalance - amount);
      setTransactionStatus(language === "english" ? "Transfer Successful!" : "ଟ୍ରାନ୍ସଫର ସଫଳ!");
    } else {
      setTransactionStatus(language === "english" ? "Insufficient Balance" : "ଅପର୍ଯ୍ୟାପ୍ତ ବାଲାନ୍ସ");
    }
  };

  const handleBillAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimal points
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setBillAmount(value);
    }
  };

  const handleHelp = () => {
    setShowHelp(!showHelp);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">
          {language === "english" ? "Banking Services" : "ବ୍ୟାଙ୍କିଂ ସେବା"}
        </h2>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {language === "english" ? "Wallet Balance" : "ୱାଲେଟ୍ ବାଲାନ୍ସ"}
              </h3>
              <p className="text-lg text-gray-600">{`₹${walletBalance.toFixed(2)}`}</p>
            </div>
            <button
              onClick={handleHelp}
              className="text-blue-600 flex items-center space-x-2"
            >
              <HelpCircle className="h-5 w-5" />
              <span>{language === "english" ? "Help" : "ସହଯୋଗ"}</span>
            </button>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-600">
              {language === "english" ? "Enter Bill Amount" : "ବିଲ୍ ରାଶି ଦିଆନ୍ତୁ"}
            </label>
            <input
              type="text"
              value={billAmount}
              onChange={handleBillAmountChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder={language === "english" ? "Enter Amount" : "ରାଶି ଦିଆନ୍ତୁ"}
            />
          </div>

          <div className="mt-6 flex space-x-4">
            <button
              onClick={handleWalletPayment}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              {language === "english" ? "Pay Bill" : "ବିଲ୍ ପେମେଣ୍ଟ କରନ୍ତୁ"}
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">
            {language === "english" ? "Bank Transfer" : "ବ୍ୟାଙ୍କ୍ ଟ୍ରାନ୍ସଫର"}
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            {language === "english" ? "Transfer Money to Other Account" : "ଅନ୍ୟ ଖାତାକୁ ପଇସା ଟ୍ରାନ୍ସଫର କରନ୍ତୁ"}
          </p>

          <div className="mt-4">
            <button
              onClick={() => handleBankTransfer(200)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {language === "english" ? "Transfer ₹200" : "₹200 ଟ୍ରାନ୍ସଫର କରନ୍ତୁ"}
            </button>
          </div>
        </div>

        {transactionStatus && (
          <div className={`p-4 rounded-lg mt-4 ${
            transactionStatus.includes("Successful") ? 
            "bg-green-100 text-green-800" : 
            "bg-yellow-100 text-yellow-800"
          }`}>
            <p>{transactionStatus}</p>
          </div>
        )}

        {showHelp && (
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-gray-700 mb-2">
              {language === "english" ? "How to Use" : "କିପରି ବ୍ୟବହାର କରିବେ?"}
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                {language === "english"
                  ? "1. Enter the bill amount you want to pay"
                  : "1. ଆପଣ ଦେବାକୁ ଚାହୁଁଥିବା ବିଲ୍ ରାଶି ପ୍ରବେଶ କରନ୍ତୁ"}
              </li>
              <li>
                {language === "english"
                  ? "2. Click 'Pay Bill' to process the payment"
                  : "2. ପେମେଣ୍ଟ କରିବାକୁ 'ବିଲ୍ ପେମେଣ୍ଟ' କ୍ଲିକ୍ କରନ୍ତୁ"}
              </li>
              <li>
                {language === "english"
                  ? "3. Use bank transfer for sending money to other accounts"
                  : "3. ଅନ୍ୟ ଖାତାକୁ ପଇସା ପଠାଇବା ପାଇଁ ବ୍ୟାଙ୍କ୍ ଟ୍ରାନ୍ସଫର ବ୍ୟବହାର କରନ୍ତୁ"}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banking;