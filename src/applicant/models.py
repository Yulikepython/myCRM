from django.db import models

# from leads.models import Lead

#have to figure out what step to pass

class PropertyApplicationPhase(models.Model):
    applicant_date = models.DateField()
    lead = models.ForeignKey("leads.Lead", on_delete=models.CASCADE, verbose_name="Lead")
    applicant_information = models.BooleanField(default=False, verbose_name="申込情報")
    surety_screening = models.BooleanField(default=False, verbose_name="保証会社審査")
    owner_screening = models.BooleanField(default=False, verbose_name="オーナー審査")
    document_inform = models.BooleanField(default=False, verbose_name="必要書類の案内")
    invoice_inform_applicant = models.BooleanField(default=False, verbose_name="入居者への請求書提示")
    invoice_inform_agency = models.BooleanField(default=False, verbose_name="不動産業者への請求書提示")
    contract_date = models.DateField(blank=True, null=True)
    contract_applicant = models.BooleanField(default=False, verbose_name="契約締結")
    move_in_date = models.DateField(blank=True, null=True)
    memo = models.TextField(verbose_name="メモ", blank=True, null=True)

    def __str__(self):
        return self.lead.name