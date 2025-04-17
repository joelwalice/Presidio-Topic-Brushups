using System;

public class Counter
{
    private int count = 0;
    private int threshold;
    public delegate void ThresholdReachedHandler(int count);
    public event ThresholdReachedHandler ThresholdReached;

    public Counter(int threshold)
    {
        this.threshold = threshold;
    }
    public void Increment()
    {
        count++;
        Console.WriteLine("Counter: " + count);

        if (count == threshold)
        {
            OnThresholdReached();
        }
    }
    protected virtual void OnThresholdReached()
    {
        if (ThresholdReached != null)
        {
            ThresholdReached(count);
        }
    }
}

class Program
{
    static void Main()
    {
        Console.WriteLine("=== Counter with Events ===");
        Counter counter = new Counter(5);
        counter.ThresholdReached += AlertUser;
        counter.ThresholdReached += CongratulateUser;
        for (int i = 0; i < 10; i++)
        {
            counter.Increment();
            System.Threading.Thread.Sleep(500);
        }
    }
    static void AlertUser(int count)
    {
        Console.WriteLine($"[ALERT] Counter reached the threshold: {count}");
    }
    static void CongratulateUser(int count)
    {
        Console.WriteLine($"[Congrats!] You've hit the threshold number {count}!");
    }
}
