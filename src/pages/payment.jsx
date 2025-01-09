import React from 'react';

const accountDetails = {
  accountName: 'Agroprodchain LTD',
  accountNumber: '4011473995',
  bankName: 'Fidelity Bank',
  whatsappNumber: '+2349075442128',
};

const AccountDetails = () => {
  const handleWhatsAppClick = () => {
    const message = `Hello, I would like to verify my payment.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${accountDetails.whatsappNumber.replace(
      '+',
      ''
    )}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Account Details</h1>
      <div style={styles.card}>
        <div className="mb-5"><p>
        "Contact us, then select a product or service. Make payment using the details below and send the receipt to the WhatsApp number provided for verification. We will deliver your order in no time!"
        </p></div>
        <p>
          <strong>Account Name:</strong> {accountDetails.accountName}
        </p>
        <p>
          <strong>Account Number:</strong> {accountDetails.accountNumber}
        </p>
        <p>
          <strong>Bank Name:</strong> {accountDetails.bankName}
        </p>
      </div>
      <div style={styles.whatsapp}>
        <p>
          <strong>WhatsApp Number:</strong> {accountDetails.whatsappNumber}
        </p>
        <button style={styles.button} onClick={handleWhatsAppClick}>
          Send Receipt on WhatsApp
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  card: {
    border: '1px solid #ddd',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    marginBottom: '20px',
  },
  whatsapp: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#25D366',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default AccountDetails;
