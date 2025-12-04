-- Disable email confirmation
UPDATE auth.config SET value = 'false' WHERE parameter = 'enable_confirmations';