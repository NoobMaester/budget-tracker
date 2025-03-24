import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const { transactions } = await req.json();

    const prompt = `As a financial expert, analyze these transactions and provide insights in the following JSON format:
    {
      "summary": "Brief overview of financial health",
      "spendingPatterns": "Key spending patterns identified",
      "recommendations": ["3-4 specific actionable recommendations"],
      "savingsOpportunities": ["2-3 specific areas where money could be saved"],
      "budgetingSuggestions": "Specific budgeting advice based on spending"
    }

    Consider:
    - Income vs expenses ratio
    - Major spending categories
    - Irregular expenses
    - Potential areas of overspending
    - Savings opportunities

    Transactions data:
    ${JSON.stringify(transactions, null, 2)}`;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a precise financial expert who provides structured, actionable insights in JSON format."
        },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const insight = response.choices[0]?.message?.content;
    
    try {
      // Parse the response to ensure valid JSON
      const parsedInsight = JSON.parse(insight || "{}");
      return NextResponse.json({ insight: parsedInsight });
    } catch {
      // If JSON parsing fails, return the raw insight
      return NextResponse.json({ insight: insight || "No insight available" });
    }

  } catch (error) {
    console.error('AI Insight Error:', error);
    return NextResponse.json(
      { error: "Failed to generate insight" },
      { status: 500 }
    );
  }
}
