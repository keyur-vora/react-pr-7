#include <stdio.h>

struct student
{
    int n;
    int rollno;
    char name[20];
    int chemistry;
    int maths;
    int physics;
    int total;
    int percent;
};

int main()
{

    int n;
    printf("Enter the number of students : ");
    scanf("%d", &n);
    int i;
    struct student s[n];

    for (i = 0; i < n; i++)
    {
        printf("Enter your ROLLNO :");
        scanf("%d", &s[i].rollno);
        printf("\nEnter your Name:");
        scanf(" %[^\n]", &s[i].name);
        printf("\nEnter your CHEMISTRY:");
        scanf("%d", &s[i].chemistry);
        printf("\nEnter your MATHS:");
        scanf(" %d", &s[i].maths);
        printf("\nEnter your PHYSICS:");
        scanf(" %d", &s[i].physics);
    }

    printf("\n --- student Record ---\n");

    for (i = 0; i < n; i++)
    {
        printf("Enter the number of students : \n", s[i].n);
        printf(" ID :%d\n", s[i].rollno);
        printf(" NAME :%s\n", s[i].name);
        printf(" CHEMISTRY :%d\n", s[i].chemistry);
        printf(" MATHS:%d\n", s[i].maths);
        printf(" PHYSICS:%d\n", s[i].physics);
        printf("TOTAL :%d/300 \n", s[i].chemistry + s[i].maths + s[i].physics, s[i].total);
        printf("PERCENT :%d", (s[i].total / 300) * 100);
    }
}