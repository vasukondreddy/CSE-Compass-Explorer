
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const useEmailConfirmation = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Since email confirmation is disabled, we only need to handle any potential
    // leftover confirmation tokens in the URL and clear them
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = hashParams.get('access_token');
    const type = hashParams.get('type');
    
    if (type === 'signup' && accessToken) {
      // Clear the hash from URL since confirmation is no longer needed
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [toast]);
};

export default useEmailConfirmation;
