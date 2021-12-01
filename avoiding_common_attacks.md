# Contract security measures


## SWC-115 Authorization through tx.origin

- Owner authentication is done using msg.sender and not tx.origin.

## SWC-123 Requirement Violation

- The validations have been used at various stages to gaurd against actions that are not allowed.
  (Example: 
  An auction which has already been started cannot be started again. 
  End Auction validates if the auction is not already ended)
