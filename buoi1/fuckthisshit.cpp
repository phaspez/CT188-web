#include <math.h>

long int sumexp(int r, int n)
{
    long int sum = 0;            // O(1)
    long int power = 1;          // O(1)
    for (int i = 0; i <= n; i++)
    {                            
        sum += power;            // O(1)
        power *= r;              // O(1)
    }
    return sum;                  // O(1)
}

long int sumexp2(int r, int n)
{
    long int sum = 0;            // O(1)
    for (int i = 0; i <= n; i++) 
    {                       
        long int power = 1;      // O(1)
        for (int j = 0; j < i; j++)
        {                        
            power *= r;          // O(1)
        }
        sum += power;            // O(1)
    }
    return sum;                  // O(1)
}

long int sumexp3(int r, int n)
{
    long int sum = 0;            // O(1)
    for (int i = 0; i <= n; i++)
    {                      
        sum += pow(r, i);        // O(log n)
    }
    return sum;                  // O(1)
}

long int sumexp4(int r, int n)
{
    return (long int)((1 - pow(r, n + 1)) / (1 - r));
}


