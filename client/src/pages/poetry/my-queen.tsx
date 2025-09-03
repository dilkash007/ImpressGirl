import PoetryLayout from "@/components/poetry-layout";

export default function MyQueen() {
  return (
    <PoetryLayout
      title="My Queen"
      subtitle="You rule my heart"
      backgroundImage="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300"
    >
      <div className="space-y-6 text-foreground">
        <p>अल्का मेरी रानी,</p>
        <p>तुम हो मेरे दिल की मालकिन।</p>
        <p>तुम्हारे प्यार का राज,</p>
        <p>मेरे दिल में बसा है।</p>
        
        <div className="my-8"></div>
        
        <p>हर फैसले में तुम्हारी राय,</p>
        <p>मेरे लिए सबसे कीमती है।</p>
        <p>अल्का, तुम्हारी खुशी,</p>
        <p>मेरे लिए सबसे जरूरी है।</p>
        
        <div className="my-8"></div>
        
        <p>इस प्रेम के राज्य में,</p>
        <p>तुम हो एकमात्र रानी।</p>
        <p>अल्का, तुम्हारे प्यार की,</p>
        <p>मैं हूँ सच्चा दीवानी।</p>
      </div>
    </PoetryLayout>
  );
}
